import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopCategoryFlowerPage } from './shop-category-flower.page';

const routes: Routes = [
  {
    path: '',
    component: ShopCategoryFlowerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopCategoryFlowerPageRoutingModule {}
