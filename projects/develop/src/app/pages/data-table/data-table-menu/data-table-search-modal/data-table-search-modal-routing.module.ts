import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTableSearchModalPage } from './data-table-search-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DataTableSearchModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchModalPageRoutingModule {}
