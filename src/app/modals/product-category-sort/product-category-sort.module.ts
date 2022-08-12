import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCategorySortPageRoutingModule } from './product-category-sort-routing.module';

import { ProductCategorySortPage } from './product-category-sort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductCategorySortPageRoutingModule
  ],
  declarations: [ProductCategorySortPage]
})
export class ProductCategorySortPageModule {}
