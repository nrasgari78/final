import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CountdownTimerPageRoutingModule } from './tamin-countdown-timer-routing.module';
import { TaminCountdownTimerPage } from './tamin-countdown-timer.page';
import { TimePipe } from './time.pipe';
import {IonicModule} from "@ionic/angular";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CountdownTimerPageRoutingModule,
    IonicModule
  ],
  exports: [
    TaminCountdownTimerPage
  ],
  declarations: [TaminCountdownTimerPage, TimePipe]
})
export class CountdownTimerPageModule {}
