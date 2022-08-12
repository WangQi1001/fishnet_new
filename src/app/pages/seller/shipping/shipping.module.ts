import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShippingPageRoutingModule } from './shipping-routing.module';

import { ShippingPage } from './shipping.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ShippingPageRoutingModule
  ],
  declarations: [ShippingPage]
})
export class ShippingPageModule {}
