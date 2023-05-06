import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { DataTableFaqPageRoutingModule } from './data-table-faq-routing.module';

import { DataTableFaqPage } from './data-table-faq.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DataTableFaqPageRoutingModule
  ],
  declarations: [DataTableFaqPage]
})
export class DataTableFaqPageModule {}
