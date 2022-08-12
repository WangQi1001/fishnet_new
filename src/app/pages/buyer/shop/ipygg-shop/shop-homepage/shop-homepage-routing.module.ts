import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopHomepagePage } from './shop-homepage.page';

const routes: Routes = [
  {
    path: '',
    component: ShopHomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopHomepagePageRoutingModule {}
