import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopHomepagePageRoutingModule } from './shop-homepage-routing.module';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { ShopHomepagePage } from './shop-homepage.page';
import { ToolbarShopPageComponent } from 'src/app/components/toolbar-shop-page/toolbar-shop-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopHomepagePageRoutingModule
  ],
  declarations: [
    ShopHomepagePage,
    ProductCardComponent,
    ToolbarShopPageComponent
  ]
})
export class ShopHomepagePageModule {}
