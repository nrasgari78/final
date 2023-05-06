import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTableItemPage } from './data-table-item.page';

const routes: Routes = [
  {
    path: '',
    component: DataTableItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataTableItemPageRoutingModule {}
