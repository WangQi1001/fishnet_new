import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopCategoryFishPageRoutingModule } from './shop-category-fish-routing.module';

import { ShopCategoryFishPage } from './shop-category-fish.page';
import { ToolbarShopPageComponent } from 'src/app/components/toolbar-shop-page/toolbar-shop-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopCategoryFishPageRoutingModule
  ],
  declarations: [ShopCategoryFishPage, ToolbarShopPageComponent]
})
export class ShopCategoryFishPageModule {}
