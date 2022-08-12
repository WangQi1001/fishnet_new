import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopCategoryInsectPage } from './shop-category-insect.page';

const routes: Routes = [
  {
    path: '',
    component: ShopCategoryInsectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopCategoryInsectPageRoutingModule {}
