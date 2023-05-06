import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import {TaminItem} from './component/tamin-item';
import {TaminAvatarModule} from "../avatar/tamin-avatar.module";
import {TaminThumbnailModule} from "../thumbnail/tamin-thumbnail.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaminAvatarModule,
    TaminThumbnailModule,
  ],
  exports: [TaminItem ],
  declarations: [TaminItem ]
})
export class TaminItemModule {}
