import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaminChangeAddress } from './component/tamin-change-address';
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TaminChangeAddressFormModule} from "./component/change-address-form/tamin-change-address-form.module";

@NgModule({
  declarations: [
    TaminChangeAddress
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    TaminChangeAddressFormModule
  ],
  exports: [TaminChangeAddress]
})
export class TaminChangeAddressModule { }
