import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonPageRoutingModule } from './button-routing.module';

import { ButtonPage } from './button.page';
import {TaminButtonModule} from "../../components/button/tamin-button.module";
import {CodePageModule} from "../code/code.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonPageRoutingModule,
    TaminButtonModule,
    CodePageModule
  ],
  declarations: [ButtonPage]
})
export class ButtonPageModule {}
