import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaminPasswordCheckerPage } from './password-checker.page';

const routes: Routes = [
  {
    path: '',
    component: TaminPasswordCheckerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordCheckerPageRoutingModule {}
