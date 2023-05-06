import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './component/information.component';
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [
    InformationComponent
  ],
  exports: [
    InformationComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class InformationModule { }
