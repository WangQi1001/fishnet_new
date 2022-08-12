import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopCategoryFishPage } from './shop-category-fish.page';

const routes: Routes = [
  {
    path: '',
    component: ShopCategoryFishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopCategoryFishPageRoutingModule {}
