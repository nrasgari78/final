import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaminChangePhone } from './tamin-change-phone';
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CountdownTimerPageModule} from "../countdown-timer/tamin-countdown-timer.module";

@NgModule({
  declarations: [
    TaminChangePhone
  ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        CountdownTimerPageModule
    ],
  exports: [TaminChangePhone]
})
export class TaminChangePhoneModule { }
