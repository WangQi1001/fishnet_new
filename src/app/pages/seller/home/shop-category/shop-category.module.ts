import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopCategoryPageRoutingModule } from './shop-category-routing.module';

import { ShopCategoryPage } from './shop-category.page';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { ToolbarSellerComponent } from 'src/app/components/toolbar-seller/toolbar-seller.component';
import { ToolbarSellerTopComponent } from 'src/app/components/toolbar-seller-top/toolbar-seller-top.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopCategoryPageRoutingModule
  ],
  declarations: [
    ShopCategoryPage,
    ProductCardComponent,
    ToolbarSellerComponent,
    ToolbarSellerTopComponent
  ]
})
export class ShopCategoryPageModule {}
