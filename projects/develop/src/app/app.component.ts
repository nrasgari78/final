import {Component} from '@angular/core';
import {TaminRestService} from "./provider/rest/tamin-rest.service";
import { Data} from '../assets/menu-data'
import {ApplicationConfig} from "./model/application-config-model";
import {Config} from "./application-config";
import {catchError, map, tap} from "rxjs/operators";
import {BehaviorSubject, EMPTY, Observable, of} from "rxjs";
import {TaminBaseService} from "./provider/base/base.service";
import {TaminRestServices} from "./provider/rest/tamin-rest.service-observable";
import {TaminRestGetForkService} from "./provider/rest/tamin-rest-get-fork.service";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  sources :Observable<any>[]=[
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/annقصثقصثent/to-user'),
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/announcement/to-user'),
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/announcement/to-user'),
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/announcement/to-user'),
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/announcement/to-user'),
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/announcement/to-user'),
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/announcement/to-user'),
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/announcement/to-user'),
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/announcement/to-user'),
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/announcement/to-user'),
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/announcement/to-user'),
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/announcement/to-user'),
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/announcement/to-user'),
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/announcement/to-user'),
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/announcement/to-user'),
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/announcement/to-user'),
    this.restfork.getAllForkJoin('https://eservices.tamin.ir/api/announcement/to-user'),
  ]
  configuration!: ApplicationConfig;
  isHtml: boolean = true;
  offset: number = 2;
  currentPage: number = 1;
  imgsrc = ['assets/swiper-img/image1.jpg', 'assets/swiper-img/image4.jpg', 'assets/swiper-img/image5.jpg', 'assets/swiper-img/image3.jpg', 'assets/swiper-img/image4.jpg', 'assets/swiper-img/puppyies.jpg', 'assets/swiper-img/home.jpg'  ]

  constructor(private baseService: TaminBaseService, private restServices: TaminRestServices ,private restfork: TaminRestGetForkService) {}



   ngOnInit() {
    this.configuration = {...Config};
     this.configuration.menuData = Data;


     this.restServices.getForkJoin(this.sources).subscribe({
       next(value) {
       },
     });
   }

  changeSteper(event: any) {
    console.log(event)

  }


  // loadPage(offset: number) {
  //   this.currentPage = offset / 10 + 1;
  //   // console.log(this.currentPage)
  //   this.restService.getPage('https://eservices.tamin.ir/api/announcement/to-user', this.currentPage, 20 ,  [],  [])
  //   this.offset = offset;
  // }

}
