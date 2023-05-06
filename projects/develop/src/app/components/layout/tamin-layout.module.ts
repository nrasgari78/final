import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {TaminCol, TaminLayout, TaminRow} from "./component/tamin-layout";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    TaminLayout,
    TaminCol,
    TaminRow
  ],

  declarations: [TaminLayout, TaminCol, TaminRow]
})
export class TaminLayoutModule {
}
