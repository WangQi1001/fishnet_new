import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopCategoryPageRoutingModule } from './shop-category-routing.module';

import { ShopCategoryPage } from './shop-category.page';
import { ToolbarShopPageComponent } from 'src/app/components/toolbar-shop-page/toolbar-shop-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopCategoryPageRoutingModule
  ],
  declarations: [ShopCategoryPage, ToolbarShopPageComponent]
})
export class ShopCategoryPageModule {}
