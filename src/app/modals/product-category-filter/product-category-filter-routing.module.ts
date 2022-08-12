import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCategoryFilterPage } from './product-category-filter.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCategoryFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCategoryFilterPageRoutingModule {}
