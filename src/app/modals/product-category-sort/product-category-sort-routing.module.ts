import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCategorySortPage } from './product-category-sort.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCategorySortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCategorySortPageRoutingModule {}
