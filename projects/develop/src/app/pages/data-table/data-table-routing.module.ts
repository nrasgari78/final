import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTablePage } from './data-table.page';

const routes: Routes = [
  {
    path: '',
    component: DataTablePage
  },
  {
    path: 'data-table-row',
    loadChildren: () => import('./data-table-row/data-table-row.module').then( m => m.DataTableRowPageModule)
  },
  {
    path: 'data-table-search-modal',
    loadChildren: () => import('./data-table-menu/data-table-search-modal/data-table-search-modal.module').then(m => m.SearchModalPageModule)
  },
  {
    path: 'data-table-item',
    loadChildren: () => import('./data-table-item/data-table-item.module').then( m => m.DataTableItemPageModule)
  },
  {
    path: 'more-info',
    loadChildren: () => import('./data-table-item/more-info/more-info.module').then(m => m.MoreInfoPageModule)
  },
  {
    path: 'data-table-sort-popover',
    loadChildren: () => import('./data-table-menu/data-table-sort-popover/data-table-sort-popover.module').then(m => m.SortPopoverPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./data-table-menu/data-table-menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./data-table-menu/data-table-faq/data-table-faq.module').then(m => m.DataTableFaqPageModule)
  },
  {
    path: 'data-table-pagination',
    loadChildren: () => import('./data-table-pagination/data-table-pagination.module').then( m => m.DataTablePaginationPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataTablePageRoutingModule {}
