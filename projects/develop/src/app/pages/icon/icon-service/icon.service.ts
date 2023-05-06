import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {distinct, map, mergeAll, mergeMap, switchMap, tap} from "rxjs/operators";
import {of, toArray} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(private http: HttpClient) {
  }

  // getSearchIcon(searchTerm: string) {
  //   if (searchTerm === 'all')
  //     return this.http.get<any>('../../../../assets/json/icons.json')
  //   else
  //     return this.http.get<any>('../../../../assets/json/icons.json').pipe(
  //       map(res =>
  //         res.filter((i: any) => `${i.name}`.match(searchTerm))))
  // }

  getIcons(searchCat: string) {
      return this.http.get<any>('../../../../assets/json/icons.json').pipe(
        map(res =>
          res.filter((i: any) => `${i.categories[0]}`===searchCat))
      )
  }


  getCat() {
    let category: any[] = []
    return this.http.get<any>('../../../../assets/json/icons.json').pipe(
      map(res => res.map((i: any) => {
        if (!category.includes(i.categories[0]))
          category.push(i.categories[0])
      })),
      map(res => category),
      tap(res1 => console.log(res1)),
    )
  }
  // getCat() {
  //   let category: any[] = []
  //   return this.http.get<any>('../../../../assets/json/icons.json').pipe(
  //     tap(res1 => console.log(res1)),
  //     mergeMap(res => res.map((i:any)=>i.categories[0])),
  //     tap(res1 => console.log(res1)),
  //     distinct((i:any)=>i.categories[0]),
  //     tap(res1 => console.log(res1)),
  //     // toArray()
  //     // map(res => category),
  //     // tap(res1 => console.log(res1)),
  //   )
  // }
}
