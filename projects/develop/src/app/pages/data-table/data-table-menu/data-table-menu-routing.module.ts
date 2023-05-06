import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTableMenuPage } from './data-table-menu.page';

const routes: Routes = [
  {
    path: '',
    component: DataTableMenuPage
  },
  {
    path: 'chart-modal',
    loadChildren: () => import('./chart-modal/chart-modal.module').then( m => m.ChartModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
