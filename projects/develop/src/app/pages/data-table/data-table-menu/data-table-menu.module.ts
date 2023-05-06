import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './data-table-menu-routing.module';

import { DataTableMenuPage } from './data-table-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    
  ],
  declarations: [DataTableMenuPage]
})
export class MenuPageModule {}
