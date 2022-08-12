import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductVisitRateFilterPageRoutingModule } from './product-visit-rate-filter-routing.module';

import { ProductVisitRateFilterPage } from './product-visit-rate-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProductVisitRateFilterPageRoutingModule
  ],
  declarations: [ProductVisitRateFilterPage]
})
export class ProductVisitRateFilterPageModule {}