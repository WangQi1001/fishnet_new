import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';
import { ToolbarProductPageComponent } from 'src/app/components/toolbar-product-page/toolbar-product-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
  ],
  declarations: [ProductPage,
  ToolbarProductPageComponent]
})
export class ProductPageModule {}
