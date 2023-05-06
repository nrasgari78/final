import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpRequest, HttpEvent, HttpErrorResponse} from '@angular/common/http';
import {catchError, count, delay, map, switchMap, tap, timeout} from 'rxjs/operators';
import {BehaviorSubject, forkJoin, lastValueFrom, Observable, of, pipe} from 'rxjs';
import {TaminBaseService} from "../base/base.service";
import {ModalController} from "@ionic/angular";
import {ProgressComponent} from "../../components/progress/component/progress.component";

export enum SearchOperator {
  EQUAL = 'EQUAL',
  EQ = 'EQ',
  LIKE = 'LIKE',
  NOT = 'NOT',
  GT = 'GT',
  LT = 'LT',
  GTE = 'GTE',
  LTE = 'LTE',
  NEQ = 'NEQ'
}

export class SearchParam {
  property: any;
  value: any;
  operator?: SearchOperator;
}

export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC'
}

export class SortParam {
  property: any;
  direction?: SortDirection;
}

@Injectable({
  providedIn: 'root'
})
export class TaminRestServices {

  protected URL_ERROR = 'url not specified';
  protected ID_ERROR = 'id not specified';
  modal: any;
  count: number = 0
  counter :BehaviorSubject<any>=new BehaviorSubject<any>("")

  constructor(private http: HttpClient, private baseService: TaminBaseService, private modalCtrl: ModalController) {
    this.counter.subscribe(value => {
    })
  }


  protected getData(
    url: string,
    pageNo?: number,
    pageSize?: number,
    searchParams?: SearchParam[],
    sortParams?: SortParam[],
    query?: any): Observable<any> {
    let params = new HttpParams();
    if (pageNo && pageSize) {
      params = params.append('page', pageNo.toString());
      params = params.append('start', ((pageNo - 1) * pageSize).toString());
      params = params.append('limit', pageSize.toString());
    }
    if (query) {
      Object.keys(query).forEach((key) => {
        params = params.append(key, query[key]);
      });
    }
    if (searchParams) {
      params = params.append('filter', JSON.stringify(searchParams));
    }
    if (sortParams) {
      params = params.append('sort', JSON.stringify(sortParams));
    }
    return this.http.get(url, {params}).pipe(
      catchError((error) => of({error})),
      timeout(60000));
  }

  getBlob(url: string, searchParams?: SearchParam[]): Observable<any> {
    let params = new HttpParams();
    if (searchParams) {
      params = params.append('filter', JSON.stringify(searchParams));
    }
    return this.http.get(url, {params, responseType: 'blob'}).pipe(timeout(60000));
  }

  getAll(url: string, querySearchParams?: SearchParam[], querySortParams?: SortParam[], query?: object): Observable<any> {
    return this.getData(url, undefined, undefined, querySearchParams, querySortParams, query);
  }

  getPage(url: string, pageNo: number, pageSize: number, querySearchParams?: SearchParam[], querySortParams?: SortParam[], query?: object): Observable<any> {
    return this.getData(url, pageNo, pageSize, querySearchParams, querySortParams, query)
  }

  create(url: string, data: any): Observable<any> {
    return url.trim() === '' ? of(null) : this.http.post<any>(url, data).pipe(timeout(60000))
  }


  getAllManaged<TModel>(url: string, querySearchParams?: SearchParam[], querySortParams?: SortParam[], query?: object): Observable<TModel> {
    return this.getData(url, undefined, undefined, querySearchParams, querySortParams, query).pipe(tap((value: any) =>
      value.data ? of(value.data as TModel) : of(value.list as TModel)
    ));
  }


  getPageManaged<TModel>(url: string, pageNo: number, pageSize: number, querySearchParams?: SearchParam[], querySortParams?: SortParam[], query?: object): Observable<TModel> {
    return this.getData(url, undefined, undefined, querySearchParams, querySortParams, query).pipe(
      tap((value: any) => value.data ? of(value.data as TModel) : of(value.list as TModel)
      ));
  }


  getById(url: string, id: string): Observable<any> {
    const theUrl = `${url}/${id}`;
    return url.trim() === '' ? of(null) : id.trim() === '' ?
      of(null) : this.getData(theUrl);
  }


  getByIdManaged<TModel>(url: string, id: number): Observable<TModel> {
    return this.getData(url).pipe(tap((value: any) => of(value.data as TModel)));
  }


  update<TModel>(url: string, id: string, data: TModel): Observable<any> {
    const theUrl = `${url}/${id}`;
    return url.trim() === '' ? of(null) : id.trim() === '' ?
      of(null) :
      this.http.put(theUrl, data).pipe(timeout(60000));
  }


  delete(url: string, id: string): Observable<any> {
    const theUrl = `${url}/${id}`;
    return url.trim() === '' ? of(null) : id.trim() === '' ? of(null) :
      this.http.delete(theUrl).pipe(timeout(60000));
  }

  upload(url: string, file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  getFiles(url: string, guid: string, v1: string, v2: string): Observable<any> {
    return this.http.get(url + `/${guid}/${v1}/${v2}`);
  }


  uploadImage(url: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(url, formData);
  }

  lastValue(data: any) {
    return lastValueFrom(data);
  }
  getForkJoin(value: any): Observable<any> {
    this.counter.next(1);
    return forkJoin(value.map((o: any) => o.pipe(tap(async () => {
      this.modal = await this.modalCtrl.create({
        component: ProgressComponent,
        componentProps: {update: this.counter, length: value.length}
      });
      if (this.count === 0) {
        this.modal.present();
      }
        const num = this.count++;
        this.counter.next(num);
    }))))
      .pipe(
        delay(1000),
        map((data) => {
            this.baseService.dismissModal();
          return {
            data
          };
        })
      )
  }



}




