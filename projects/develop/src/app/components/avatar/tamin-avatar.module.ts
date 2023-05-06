import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TaminAvatar } from './component/tamin-avatar';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [
        TaminAvatar
    ],
    declarations: [TaminAvatar]
})
export class TaminAvatarModule {}
