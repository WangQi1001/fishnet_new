import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepageNewPageRoutingModule } from './homepage-new-routing.module';

import { HomepageNewPage } from './homepage-new.page';
import { ToolbarSellerComponent } from 'src/app/components/toolbar-seller/toolbar-seller.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { ToolbarShopPageComponent } from 'src/app/components/toolbar-shop-page/toolbar-shop-page.component';
import { ToolbarSellerTopComponent } from 'src/app/components/toolbar-seller-top/toolbar-seller-top.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepageNewPageRoutingModule
  ],
  declarations: [
    HomepageNewPage, 
    ToolbarSellerComponent,
    ToolbarShopPageComponent,
    ToolbarSellerTopComponent,
    ProductCardComponent
  ]
})
export class HomepageNewPageModule {}
