import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTableSortPopoverPage } from './data-table-sort-popover.page';

const routes: Routes = [
  {
    path: '',
    component: DataTableSortPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SortPopoverPageRoutingModule {}
