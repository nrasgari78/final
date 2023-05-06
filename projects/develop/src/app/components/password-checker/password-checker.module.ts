import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordCheckerPageRoutingModule } from './password-checker-routing.module';

import { TaminPasswordCheckerPage } from './password-checker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordCheckerPageRoutingModule
  ],
  declarations: [TaminPasswordCheckerPage],
  exports: [TaminPasswordCheckerPage]
})
export class TaminPasswordCheckerPageModule {}
