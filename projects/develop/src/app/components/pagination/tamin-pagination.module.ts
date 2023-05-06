import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {TaminPagination} from "./component/tamin-pagination";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [TaminPagination],
  exports: [
    TaminPagination
  ],
})
export class TaminPaginationModule {}
