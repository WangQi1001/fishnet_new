import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CouponEditPageRoutingModule } from './coupon-edit-routing.module';

import { CouponEditPage } from './coupon-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CouponEditPageRoutingModule
  ],
  declarations: [CouponEditPage]
})
export class CouponEditPageModule {}
