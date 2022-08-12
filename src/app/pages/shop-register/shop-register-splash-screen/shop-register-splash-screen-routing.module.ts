import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopRegisterSplashScreenPage } from './shop-register-splash-screen.page';

const routes: Routes = [
  {
    path: '',
    component: ShopRegisterSplashScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRegisterSplashScreenPageRoutingModule {}
