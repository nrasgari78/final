
import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { TaminBaseService } from '../base/base.service';
import { TaminSecurityService } from '../security/tamin-security.service';


@Injectable()
export class TaminAuthInterceptor implements HttpInterceptor {

  userToken: any;

  constructor(private baseService: TaminBaseService, private securityService: TaminSecurityService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = this.securityService.getToken();
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userToken}`
        }
      });
      return next.handle(request).pipe(
        finalize(() => {
          // this.baseService.dismissLoader();
        }),
        catchError((error) => {
          switch (error.status) {
            case 401:
              this.securityService.isUserLoggedIn.next(false);
              this.baseService.showAlert('کاربر گرامی لطفا برای ادامه استفاده از اپلیکیشن، مجدد وارد شوید.', () => { this.securityService.redirectToAccount(location.hash.replace('#', '')) });
              break;
            case 403:
              this.baseService.showAlert('دسترسی به سرویس مورد نظر مقدور نمی‌باشد؛ در صورت استفاده از هرگونه VPN یا پروکسی، لطفا آن را غیرفعال و مجدد تلاش نمائید.');
              break;
            case 502:
              this.baseService.showAlert('کاربر گرامی با عرض پوزش اختلالی در سیستم رخ داده است، لطفا دقایقی دیگر دوباره تلاش فرمائید');
              break;
            case 503:
              this.baseService.showAlert('در حال حاضر امکان برقراری ارتباط با سرویس دهنده مرکزی وجود ندارد. پس از چند دقیقه، مجددا تلاش نمائید.');
              break;
            case 504:
              this.baseService.showAlert('سرویس دهنده مرکزی در حال بروزرسانی می‌باشد.  پس از چند دقیقه، مجددا تلاش نمائید.');
              break;
          }
          return throwError(() => error);
        })
      )
  }

}
