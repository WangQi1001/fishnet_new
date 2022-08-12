import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CouponAddPage } from './coupon-add.page';

const routes: Routes = [
  {
    path: '',
    component: CouponAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouponAddPageRoutingModule {}
