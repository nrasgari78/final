import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaminUser} from "./tamin-user";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [TaminUser],
  imports: [
    CommonModule,
    IonicModule

  ],
  exports: [TaminUser]
})
export class TaminUserModule { }
