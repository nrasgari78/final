import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, delay } from "rxjs/operators";
import { Observable, BehaviorSubject, lastValueFrom } from 'rxjs';
import { TaminStorageService } from '../storage/tamin-storage.service';
import { TaminBaseService } from '../base/base.service';
import {ApplicationConfig} from "../../model/application-config-model";



@Injectable({
  providedIn: 'root'
})
export class TaminSecurityService {
  private tokenName = 'access_token';
  private tokenExpire = 'expires_in';
  private redirectUrl = 'redirect_url';
  private codeVerifier = 'code_verifier';
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isUserInfo: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public isUserImage: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  codeChallenge!: string;

  constructor(
    @Inject('applicationConfig')
    private applicationConfig: ApplicationConfig, private router: Router, private storageService: TaminStorageService, private baseService: TaminBaseService, private httpClient: HttpClient) {
  }

  private addRedirectUrl(url: string) {
    this.storageService.set(this.redirectUrl, url);
  }

  getRedirectUrl() {
    return this.storageService.get(this.redirectUrl);
  }

  removeRedirectUrl() {
    this.storageService.remove(this.redirectUrl);
  }

  private addToken(token: any, expireIn: any) {
    this.storageService.set(this.tokenName, token);
    this.storageService.set(this.tokenExpire, expireIn);
  }

  public getToken() {
    return this.storageService.get(this.tokenName);
  }

  public hasToken() {
    return this.storageService.exists(this.tokenName);
  }

  removeToken() {
    this.storageService.remove(this.tokenName);
    this.storageService.remove(this.tokenExpire);
  }

  checkToken() {
    if (!this.storageService.exists(this.tokenName) || !this.storageService.exists(this.tokenExpire)) {
      return false;
    }
    const expiresIn = this.storageService.get(this.tokenExpire);
    const thisTime = Number(new Date().getTime());
    if (Number(thisTime) > Number(expiresIn)) {
      this.removeToken();
      return false;
    }
    return true;
  }

  private addCodeVerifier(codeVerifier: any) {
    this.storageService.set(this.codeVerifier, codeVerifier);
  }

  public getCodeVerifier() {
    return this.storageService.get(this.codeVerifier);
  }
  removecodeVerifier() {
    this.storageService.remove(this.codeVerifier);
  }

  async callbackCheck() {
    const tmp2 = window.location.search.replace('?', '').split('&');
    const searchParams = tmp2.map(value => {
      const t = value.split('=');
      const n = t[0];
      const v = t[1];
      const result: any = {};
      result[n] = v;
      return result;
    });
    const code = searchParams.find(value => {
      return value.hasOwnProperty('code');
    });
    const expiresIn = searchParams.find(value => {
      return value.hasOwnProperty('expires_in');
    });
    if (code && expiresIn) {
      try {
        this.baseService.presentLoader();
        const response = await lastValueFrom(this.accessToToken(code['code']));
        this.isUserLoggedIn.next(true);
        this.removecodeVerifier();
        const currentTime = new Date().getTime();
        this.addToken(response.access_token, Number(currentTime) + (Number(response.expires_in) * 1000));
        this.baseService.dismissLoader();
      }
      catch {
        this.baseService.dismissLoader();
        this.baseService.showAlert('مشکل در برقراری ارتباط با سرویس دهنده مرکزی.');
        return;
      }
      const redirectUrl = this.getRedirectUrl();
      if (redirectUrl) {
        this.router.navigate([redirectUrl]);
      } else {
        this.router.navigate([`/${this.applicationConfig.mainRoute}`]);
      }
      this.removeRedirectUrl();
      this.getCurrentUserAndImageUser();
    }
  }

  async redirectToAccountWithBrowser() {
    this.removeToken();
    this.removecodeVerifier();
    const codeVerifier = this.generateCodeVerifier(64);
    console.log(codeVerifier);
    this.addCodeVerifier(codeVerifier);
    this.generateCodeChallenge(codeVerifier).then(codeChallenge => {
      window.location.href = [
        this.applicationConfig.authenticationEndpoint,
        '?',
        `redirect_uri=${this.applicationConfig.redirectUrl}`,
        '&',
        `response_type=${this.applicationConfig.responseType}`,
        '&',
        `client_id=${this.applicationConfig.clientId}`,
        '&',
        `code_challenge=${codeChallenge}`,
        '&',
        `code_challenge_method=${this.applicationConfig.codeChallengeMethod}`
      ].join('');
    })
  }

  redirectToAccount(url = '') {
    if (url !== '') {
      this.addRedirectUrl(url);
    }
    this.redirectToAccountWithBrowser();
  }

  redirectToLogout() {
    this.removeToken();
    window.location.href = `${this.applicationConfig.logoutUrl}?redirect_uri=${this.applicationConfig.redirectUrl}`;
  }

  getCurrentUserAndImageUser() {
    this.getService(this.applicationConfig.getUserNameUrl).subscribe({
      next: (userInfo) => {
        this.isUserInfo.next(userInfo.data);
        this.baseService.showToast('خوش آمدید.');
        this.getService(this.applicationConfig.getUserImageUrl).subscribe({
          next: (userImage) => {
            if (userImage.data !== 'null') {
              this.isUserImage.next('data:image/png;base64,' + userImage.data);
            }
          },
          error: (error) => {
          },
        })
      },
      error: (error) => {
        if (error.status == 500) {
          this.baseService.showAlert('مشکل در برقراری ارتباط با سرویس دهنده مرکزی، لطفا مجدد تلاش نمائید.', () => { this.getCurrentUserAndImageUser() }, 'تلاش مجدد');
        }
      },
    })
  }

  accessToToken(code: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    let body = new HttpParams();
    body = body.append('redirect_uri', this.applicationConfig.redirectUrl);
    body = body.append('client_id', this.applicationConfig.clientId);
    body = body.append('grant_type', this.applicationConfig.grantType);
    body = body.append('code', code);
    body = body.append('code_verifier', this.getCodeVerifier());
    return this.httpClient.post<any>(this.applicationConfig.getToken, body, httpOptions).pipe(
      delay(1000),
      map(response => response)
      );
  }

  getService(url: string) {
    return this.httpClient.get<any>(url).pipe(
        map(response => response)
      );
  }



  generateCodeVerifier(length: number) {
    return Array(length)
        .fill('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~')
        .map(x => x[Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * x.length)])
        .join('');
  }

  async generateCodeChallenge(code_verifier: any) {
    const encoder = new TextEncoder();
    const data = encoder.encode(code_verifier);
    const buffer = await window.crypto.subtle.digest('SHA-256', data);
    return window.btoa(new Uint8Array(buffer).reduce((data, byte) => {
      return data + String.fromCharCode(byte);
    }, '')).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  }

}
