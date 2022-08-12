import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCartPaymentPageRoutingModule } from './shopping-cart-payment-routing.module';

import { ShoppingCartPaymentPage } from './shopping-cart-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ShoppingCartPaymentPageRoutingModule
  ],
  declarations: [ShoppingCartPaymentPage]
})
export class ShoppingCartPaymentPageModule {}
