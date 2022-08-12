import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopCategoryTwoPageRoutingModule } from './shop-category-two-routing.module';

import { ShopCategoryTwoPage } from './shop-category-two.page';
import { ToolbarShopPageComponent } from 'src/app/components/toolbar-shop-page/toolbar-shop-page.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopCategoryTwoPageRoutingModule
  ],
  declarations: [
    ShopCategoryTwoPage, 
    ToolbarShopPageComponent, 
    ProductCardComponent,
  ]
})
export class ShopCategoryTwoPageModule {}
