import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemPageRoutingModule } from './item-routing.module';

import { ItemPage } from './item.page';
import {TaminItemModule} from "../../components/item/tamin-item.module";
import {CodePageModule} from "../code/code.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ItemPageRoutingModule,
        TaminItemModule,
        CodePageModule
    ],
  declarations: [ItemPage]
})
export class ItemPageModule {}
