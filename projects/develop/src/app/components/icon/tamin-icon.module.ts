import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {TaminIcon} from "./component/tamin-icon";




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    TaminIcon
  ],
  declarations: [TaminIcon]
})
export class TaminIconModule {
}
