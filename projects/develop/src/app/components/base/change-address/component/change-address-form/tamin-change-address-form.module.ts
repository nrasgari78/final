import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaminChangeAddressForm } from './tamin-change-address-form';
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TaminChangeAddressForm
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [TaminChangeAddressForm]
})
export class TaminChangeAddressFormModule { }
