import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {SearchParam, SortParam} from "./tamin-rest.service-observable";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, timeout} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TaminRestGetForkService {
  counter: BehaviorSubject<any> = new BehaviorSubject<any>("")

  constructor(private http: HttpClient) {
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
      timeout(60000));
  }

  getAllForkJoin(url: string, querySearchParams?: SearchParam[], querySortParams?: SortParam[], query?: object): Observable<any> {
    return this.getData(url, undefined, undefined, querySearchParams, querySortParams, query).pipe(
      catchError((error) => of(error)),
      tap(er=> console.log(er)))
  }

}
