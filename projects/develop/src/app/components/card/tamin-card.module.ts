import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TaminCard} from "./component/tamin-card";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    TaminCard
  ],
  declarations: [TaminCard]
})
export class TaminCardModule {
}
