import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopCategoryInsectPageRoutingModule } from './shop-category-insect-routing.module';

import { ShopCategoryInsectPage } from './shop-category-insect.page';
import { ToolbarShopPageComponent } from 'src/app/components/toolbar-shop-page/toolbar-shop-page.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopCategoryInsectPageRoutingModule
  ],
  declarations: [ShopCategoryInsectPage, ToolbarShopPageComponent, ProductCardComponent]
})
export class ShopCategoryInsectPageModule {}
