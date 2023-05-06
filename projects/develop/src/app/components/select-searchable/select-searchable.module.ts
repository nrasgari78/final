import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {SelectSearchable} from "./component/select-searchable.component";



@NgModule({
  declarations: [
    SelectSearchable
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  exports: [
    SelectSearchable
  ],
})
export class SelectSearchableModule { }
