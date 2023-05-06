import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TaminSegment } from './component/tamin-segment';
import {SegmentValueDirective} from "./directive/segment-value.directive";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
  exports: [
    TaminSegment,
    SegmentValueDirective
  ],
    declarations: [TaminSegment, SegmentValueDirective]
})
export class TaminSegmentModule {}
