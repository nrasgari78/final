import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {IconPageRoutingModule} from './icon-routing.module'

import {TaminIconModule} from "../../components/icon/tamin-icon.module";
import {IconPage} from "./icon.page";
import {TaminChipModule} from "../../components/chip/tamin-chip.module";
import { SelectcatComponent } from './selectcat/selectcat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconPageRoutingModule,
    TaminIconModule,
    TaminChipModule,
  ],
  declarations: [IconPage, SelectcatComponent],
})
export class IconPageModule {
}
