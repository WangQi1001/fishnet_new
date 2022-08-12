import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCategoryFilterPageRoutingModule } from './product-category-filter-routing.module';

import { ProductCategoryFilterPage } from './product-category-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProductCategoryFilterPageRoutingModule
  ],
  declarations: [ProductCategoryFilterPage]
})
export class ProductCategoryFilterPageModule {}
