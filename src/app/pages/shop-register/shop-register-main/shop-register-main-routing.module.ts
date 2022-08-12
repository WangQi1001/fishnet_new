import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopRegisterMainPage } from './shop-register-main.page';

const routes: Routes = [
  {
    path: '',
    component: ShopRegisterMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRegisterMainPageRoutingModule {}
