import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileCouponPageRoutingModule } from './profile-coupon-routing.module';

import { ProfileCouponPage } from './profile-coupon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProfileCouponPageRoutingModule
  ],
  declarations: [ProfileCouponPage]
})
export class ProfileCouponPageModule {}