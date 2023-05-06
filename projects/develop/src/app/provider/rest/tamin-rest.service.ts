import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { timeout } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
export class TaminRestService {

  protected URL_ERROR = 'url not specified';
  protected ID_ERROR = 'id not specified';

  constructor(private http: HttpClient) {
  }

  protected getData(
    url: string,
    pageNo?: number,
    pageSize?: number,
    searchParams?: SearchParam[],
    sortParams?: SortParam[],
    query?: any): Promise<any> {
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
    return new Promise<any>((resolve, reject) => {

      this.http.get(url, { params }).pipe(timeout(60000))
        .toPromise()
        .then(value => {
            resolve(value);
        })
        .catch(reason => {
          reject(reason);
        });
    });
  }

  getBlob(url: string, searchParams?: SearchParam[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let params = new HttpParams();
      if (searchParams) {
        params = params.append('filter', JSON.stringify(searchParams));
      }
      this.http.get(url, { params, responseType: 'blob' }).pipe(timeout(60000))
        .toPromise()
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }

  getAll(url: string, querySearchParams?: SearchParam[], querySortParams?: SortParam[], query?: object): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (url.trim() === '') {
        reject(new Error(this.URL_ERROR));
      }
      this.getData(url, undefined, undefined, querySearchParams, querySortParams, query).then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }

  getPage(url: string, pageNo: number, pageSize: number, querySearchParams?: SearchParam[], querySortParams?: SortParam[], query?: object): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.getData(url, pageNo, pageSize, querySearchParams, querySortParams, query).then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }

  getAllManaged<TModel>(url: string, querySearchParams?: SearchParam[], querySortParams?: SortParam[], query?: object): Promise<TModel> {
    return new Promise<TModel>((resolve, reject) => {
      this.getData(url, undefined, undefined, querySearchParams, querySortParams, query).then((response: any) => {
          if (response.data) {
            resolve(response.data as TModel);
          } else if (response.list) {
            resolve(response.list as TModel);
          }
        })
        .catch((error) => reject(error));
    });
  }

  getPageManaged<TModel>(url: string, pageNo: number, pageSize: number, querySearchParams?: SearchParam[], querySortParams?: SortParam[], query?: object): Promise<TModel> {
    return new Promise<TModel>((resolve, reject) => {
      this.getData(url, pageNo, pageSize, querySearchParams, querySortParams, query).then((response: any) => {
          if (response.data) {
            resolve(response.data as TModel);
          } else if (response.list) {
            resolve(response.list as TModel);
          }
        })
        .catch((error) => reject(error));
    });
  }

  getById(url: string, id: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (url.trim() === '') {
        reject(new Error(this.URL_ERROR));
      }
      if (id.trim() === '') {
        reject(new Error(this.ID_ERROR));
      }
      const theUrl = `${url}/${id}`;
      this.getData(theUrl).then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }

  getByIdManaged<TModel>(url: string, id: number): Promise<TModel> {
    const theUrl = `${url}/${id}`;
    return new Promise<any>((resolve, reject) => {
      this.getData(url).then((response) => resolve(response.data as TModel))
        .catch((error) => reject(error));
    });
  }

  create(url: string, data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (url.trim() === '') {
        reject(new Error(this.URL_ERROR));
      }
      this.http.post(url, data).pipe(timeout(60000))
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  update<TModel>(url: string, id: string, data: TModel): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (url.toString().trim() === '') {
        reject(new Error(this.URL_ERROR));
      }
      if (id.trim() === '') {
        reject(new Error(this.ID_ERROR));
      }
      const theUrl = `${url}/${id.toString()}`;
      this.http.put(theUrl, data).pipe(timeout(60000))
        .toPromise()
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }

  delete(url: string, id: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (url.trim() === '') {
        reject(new Error(this.URL_ERROR));
      }
      if (id.trim() === '') {
        reject(new Error(this.ID_ERROR));
      }
      const theUrl = `${url}/${id}`;
      this.http.delete(theUrl).pipe(timeout(60000))
        .toPromise()
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
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

  uploadImage(url: string, file: File): Promise<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return new Promise<any>((resolve, reject) => {
      this.http.post(url, formData).pipe(timeout(60000))
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

}