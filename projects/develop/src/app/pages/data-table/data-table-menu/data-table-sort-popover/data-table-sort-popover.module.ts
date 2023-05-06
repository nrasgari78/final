import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SortPopoverPageRoutingModule } from './data-table-sort-popover-routing.module';

import { DataTableSortPopoverPage } from './data-table-sort-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SortPopoverPageRoutingModule
  ],
  declarations: [DataTableSortPopoverPage]
})
export class SortPopoverPageModule {}
