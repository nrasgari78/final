import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotePageRoutingModule } from './note-routing.module';

import { NotePage } from './note.page';
import {DataTablePageModule} from "../data-table/data-table.module";
import {SearchModalPageModule} from "../data-table/data-table-menu/data-table-search-modal/data-table-search-modal.module";
import {DataTableRowPageModule} from "../data-table/data-table-row/data-table-row.module";
import {DataTableItemPageModule} from "../data-table/data-table-item/data-table-item.module";
import {CodePageModule} from "../code/code.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NotePageRoutingModule,
        DataTablePageModule,
        ReactiveFormsModule,
        SearchModalPageModule,
        DataTableRowPageModule,
        DataTableItemPageModule,
        CodePageModule
    ],
  declarations: [NotePage]
})
export class NotePageModule {}
