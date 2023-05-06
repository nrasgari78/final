import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {BadgePageRoutingModule} from './badge-routing.module';

import {BadgePage} from './badge.page';
import {TaminBadgeModule} from "../../components/badge/tamin-badge.module";
import {TaminCardModule} from "../../components/card/tamin-card.module";
import {TaminItemModule} from "../../components/item/tamin-item.module";
import {TaminButtonModule} from "../../components/button/tamin-button.module";
import {TaminChipModule} from "../../components/chip/tamin-chip.module";
import {TaminIconModule} from "../../components/icon/tamin-icon.module";
import {CodePageModule} from "../code/code.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgePageRoutingModule,
    TaminBadgeModule,
    TaminCardModule,
    TaminItemModule,
    TaminButtonModule,
    TaminChipModule,
    TaminIconModule,
    CodePageModule,
  ],
  declarations: [BadgePage],
})
export class BadgePageModule {
}
