import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchModalPageRoutingModule } from './data-table-search-modal-routing.module';
import { DataTableSearchModalPage } from './data-table-search-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchModalPageRoutingModule,
    ReactiveFormsModule
  ],
    exports: [
        DataTableSearchModalPage
    ],
  declarations: [DataTableSearchModalPage]
})
export class SearchModalPageModule {}
