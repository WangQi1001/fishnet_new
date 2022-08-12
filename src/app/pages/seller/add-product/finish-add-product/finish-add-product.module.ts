import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishAddProductPageRoutingModule } from './finish-add-product-routing.module';

import { FinishAddProductPage } from './finish-add-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishAddProductPageRoutingModule
  ],
  declarations: [FinishAddProductPage]
})
export class FinishAddProductPageModule {}
