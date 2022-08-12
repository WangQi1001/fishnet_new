import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopCategoryTwoPage } from './shop-category-two.page';

const routes: Routes = [
  {
    path: '',
    component: ShopCategoryTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopCategoryTwoPageRoutingModule {}
