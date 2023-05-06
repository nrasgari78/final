import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalPage} from "./component/modal-page.component";
import {TaminPaginationModule} from "../../pagination/tamin-pagination.module";




@NgModule({
  declarations: [ModalPage],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        TaminPaginationModule,
    ],
  exports: [ModalPage]
})
export class TaminModalPageModule { }
