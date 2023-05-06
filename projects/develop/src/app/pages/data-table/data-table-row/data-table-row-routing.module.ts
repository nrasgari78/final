import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTableRowPage } from './data-table-row.page';

const routes: Routes = [
  {
    path: '',
    component: DataTableRowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataTableRowPageRoutingModule {}
