import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ProgressComponent} from "./component/progress.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    ProgressComponent
  ],
  declarations: [ProgressComponent]
})
export class TaminProgressModule {
}
