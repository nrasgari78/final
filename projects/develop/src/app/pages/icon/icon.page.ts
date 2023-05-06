import {Component, OnInit} from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard";
import {IconService} from "./icon-service/icon.service";
import {debounceTime, shareReplay, switchMap, tap} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";
import {TaminBaseService} from "../../provider/base/base.service";
import {NavigationExtras} from "@angular/router";




@Component({
  selector: 'app-icon',
  templateUrl: './icon.page.html',
  styleUrls: ['./icon.page.scss'],
})
export class IconPage implements OnInit {
  icons: any[]=[];
  term:BehaviorSubject<string>=new BehaviorSubject<string>('all');
  category: any;


  constructor(private _clipboard: Clipboard,private iconService:IconService,private baseService: TaminBaseService) {
  }
  ngOnInit() {
    this.showCat()
  }

  showCat() {
    this.term.pipe(
      switchMap(categories => this.iconService.getCat()),
      shareReplay(1)
    ).subscribe(res=>{
      this.category=res
    })
  }


 selectCat(event: any) {
this.baseService.navigate('icons/selectcat/'+event);
 }
}
