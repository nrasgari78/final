import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataTableItemPageRoutingModule } from './data-table-item-routing.module';

import { DataTableItemPage } from './data-table-item.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DataTableItemPageRoutingModule
    ],
    exports: [
        DataTableItemPage
    ],
    declarations: [DataTableItemPage]
})
export class DataTableItemPageModule {}
