import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaminUserInfo} from "./component/tamin-user-info";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [
    TaminUserInfo,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [TaminUserInfo],

})
export class TaminUserInfoModule {
}
