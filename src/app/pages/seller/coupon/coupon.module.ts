import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CouponPageRoutingModule } from './coupon-routing.module';

import { CouponPage } from './coupon.page';
import { ToolbarBuyerComponent } from 'src/app/components/toolbar-buyer/toolbar-buyer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CouponPageRoutingModule
  ],
  declarations: [CouponPage, ToolbarBuyerComponent]
})
export class CouponPageModule {}
