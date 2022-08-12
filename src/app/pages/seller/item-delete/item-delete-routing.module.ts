import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDeletePage } from './item-delete.page';

const routes: Routes = [
  {
    path: '',
    component: ItemDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDeletePageRoutingModule {}
