import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPagePageRoutingModule } from './category-page-routing.module';

import { CategoryPagePage } from './category-page.page';
import { ToolbarBuyerComponent } from 'src/app/components/toolbar-buyer/toolbar-buyer.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPagePageRoutingModule,
  ],
  declarations: [
    CategoryPagePage,
    ToolbarBuyerComponent,
    ProductCardComponent,
  ]
})
export class CategoryPagePageModule {}
