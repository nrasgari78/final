import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaminCountdownTimerPage } from './tamin-countdown-timer.page';

const routes: Routes = [
  {
    path: '',
    component: TaminCountdownTimerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountdownTimerPageRoutingModule {}
