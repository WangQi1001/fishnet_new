import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCategorySettingPage } from './product-category-setting.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCategorySettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCategorySettingPageRoutingModule {}
