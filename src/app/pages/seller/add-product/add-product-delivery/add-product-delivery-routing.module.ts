import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductDeliveryPage } from './add-product-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: AddProductDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProductDeliveryPageRoutingModule {}
