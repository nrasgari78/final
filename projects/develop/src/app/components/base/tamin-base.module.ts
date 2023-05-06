import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {TaminBase} from "./tamin-base";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {TaminUserInfoModule} from "./user/component/user-info/tamin-user-info.module";
import {TaminChangePasswordModule} from "./change-password/tamin-change-password.module";
import {TaminChangeAddressModule} from "./change-address/tamin-change-address.module";
import {TaminChangePhoneModule} from "./change-phone/tamin-change-phone.module";
import {DataTablePageModule} from "../../pages/data-table/data-table.module";
import {TaminUserModule} from "./user/component/user/tamin-user.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterLink,
    RouterLinkActive,
    TaminUserInfoModule,
    TaminChangePasswordModule,
    TaminChangeAddressModule,
    TaminChangePhoneModule,
    DataTablePageModule,
    TaminUserModule
  ],
  exports: [TaminBase ],
  declarations: [TaminBase ]
})
export class TaminBaseModule {}
