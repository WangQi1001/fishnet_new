import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopCategoryFlowerPageRoutingModule } from './shop-category-flower-routing.module';

import { ShopCategoryFlowerPage } from './shop-category-flower.page';
import { ToolbarShopPageComponent } from 'src/app/components/toolbar-shop-page/toolbar-shop-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopCategoryFlowerPageRoutingModule
  ],
  declarations: [ShopCategoryFlowerPage, ToolbarShopPageComponent]
})
export class ShopCategoryFlowerPageModule {}
