import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileCouponPage } from './profile-coupon.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileCouponPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileCouponPageRoutingModule {}