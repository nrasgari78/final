import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TaminButton } from './component/tamin-button';
import {TaminIconModule} from "../icon/tamin-icon.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TaminIconModule,
    ],
    exports: [
        TaminButton
    ],
    declarations: [TaminButton]
})
export class TaminButtonModule {}
