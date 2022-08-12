import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CouponAddPageRoutingModule } from './coupon-add-routing.module';

import { CouponAddPage } from './coupon-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CouponAddPageRoutingModule
  ],
  declarations: [CouponAddPage]
})
export class CouponAddPageModule {}
