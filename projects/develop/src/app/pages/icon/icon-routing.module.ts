import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IconPage} from "./icon.page";
import {SelectcatComponent} from "./selectcat/selectcat.component";


const routes: Routes = [
  {
    path: '',
    component: IconPage
  },
  {
    path:'selectcat/:id',
    component:SelectcatComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconPageRoutingModule {}
