import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTableFaqPage } from './data-table-faq.page';

const routes: Routes = [
  {
    path: '',
    component: DataTableFaqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataTableFaqPageRoutingModule {}
