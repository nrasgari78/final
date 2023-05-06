import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaminChangePassword } from './component/tamin-change-password';
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TaminPasswordCheckerPageModule} from "../../password-checker/password-checker.module";

@NgModule({
  declarations: [
    TaminChangePassword
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    TaminPasswordCheckerPageModule,
  ],
  exports: [TaminChangePassword]
})
export class TaminChangePasswordModule { }
