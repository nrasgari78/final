import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DataTablePageRoutingModule} from './data-table-routing.module';

import {DataTablePage} from './data-table.page';
import {HttpClientModule} from "@angular/common/http";
import {DataTableRowPageModule} from "./data-table-row/data-table-row.module";
import {RowDirective} from './row.directive';
import {SearchModalPageModule} from "./data-table-menu/data-table-search-modal/data-table-search-modal.module";
import {TaminSearchFilterPipe} from "../../pipe/tamin-search-filter.pipe";
import {NgxEchartsModule} from 'ngx-echarts';
import {TaminPaginationModule} from "../../components/pagination/tamin-pagination.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DataTablePageRoutingModule,
    HttpClientModule,
    DataTableRowPageModule,
    SearchModalPageModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    TaminPaginationModule,
  ],
    exports: [
        DataTablePage,
        RowDirective,
        TaminSearchFilterPipe
    ],
  declarations: [DataTablePage, RowDirective, TaminSearchFilterPipe]
})
export class DataTablePageModule {
}
