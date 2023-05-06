import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaminClientSearchbar} from "./tamin-client-searchbar";



@NgModule({
  declarations: [TaminClientSearchbar],
  imports: [
    CommonModule
  ],
  exports: [TaminClientSearchbar]
})
export class TaminClientSearchbarModule { }
