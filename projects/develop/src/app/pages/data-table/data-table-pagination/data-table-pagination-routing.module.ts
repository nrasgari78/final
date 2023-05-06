import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTablePaginationPage } from './data-table-pagination.page';

const routes: Routes = [
  {
    path: '',
    component: DataTablePaginationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataTablePaginationPageRoutingModule {}
