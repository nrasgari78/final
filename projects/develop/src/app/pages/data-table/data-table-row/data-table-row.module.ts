import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataTableRowPageRoutingModule } from './data-table-row-routing.module';

import { DataTableRowPage } from './data-table-row.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataTableRowPageRoutingModule,
  ],
    exports: [
        DataTableRowPage,

    ],
  declarations: [DataTableRowPage]
})
export class DataTableRowPageModule {}
