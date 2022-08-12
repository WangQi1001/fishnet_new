import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopCategoryBirdPageRoutingModule } from './shop-category-bird-routing.module';

import { ShopCategoryBirdPage } from './shop-category-bird.page';
import { ToolbarShopPageComponent } from 'src/app/components/toolbar-shop-page/toolbar-shop-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopCategoryBirdPageRoutingModule
  ],
  declarations: [ShopCategoryBirdPage, ToolbarShopPageComponent]
})
export class ShopCategoryBirdPageModule {}
