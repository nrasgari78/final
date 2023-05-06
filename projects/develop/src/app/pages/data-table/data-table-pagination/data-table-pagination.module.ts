import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataTablePaginationPageRoutingModule } from './data-table-pagination-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataTablePaginationPageRoutingModule
  ],
  declarations: []
})
export class DataTablePaginationPageModule {}
