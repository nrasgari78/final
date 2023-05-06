import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TaminThumbnail } from './component/tamin-thumbnail';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    TaminThumbnail
  ],
  declarations: [TaminThumbnail]
})
export class TaminThumbnailModule {}
