import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaminProgressBarComponent } from './component/tamin-progress-bar.component';
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [
    TaminProgressBarComponent
  ],
  exports: [
    TaminProgressBarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class TaminProgressBarModule { }
