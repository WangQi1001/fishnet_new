import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProductDeliveryPageRoutingModule } from './add-product-delivery-routing.module';

import { AddProductDeliveryPage } from './add-product-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProductDeliveryPageRoutingModule
  ],
  declarations: [AddProductDeliveryPage]
})
export class AddProductDeliveryPageModule {}
