import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCategorySettingPageRoutingModule } from './product-category-setting-routing.module';

import { ProductCategorySettingPage } from './product-category-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProductCategorySettingPageRoutingModule
  ],
  declarations: [ProductCategorySettingPage]
})
export class ProductCategorySettingPageModule {}
