import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartPaymentPage } from './shopping-cart-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartPaymentPageRoutingModule {}
