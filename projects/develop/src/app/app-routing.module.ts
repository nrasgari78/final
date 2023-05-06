import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TaminProgressModule} from "./components/progress/tamin-progress.module";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./pages/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./pages/button/button.module').then( m => m.ButtonPageModule)
  },

  {
    path: 'item',
    loadChildren: () => import('./pages/item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'data-table',
    loadChildren: () => import('./pages/note/note.module').then( m => m.NotePageModule)
  },
  {
    path: 'icons',
    loadChildren: () => import('./pages/icon/icon.module').then( m => m.IconPageModule)
  },
//   {
//   path: 'progress',
//   loadChildren: () => import('./components/progress/tamin-progress.module').then( m => m.TaminProgressModule )
// }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
