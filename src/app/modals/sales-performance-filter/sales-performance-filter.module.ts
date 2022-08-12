import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesPerformanceFilterPageRoutingModule } from './sales-performance-filter-routing.module';

import { SalesPerformanceFilterPage } from './sales-performance-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SalesPerformanceFilterPageRoutingModule
  ],
  declarations: [SalesPerformanceFilterPage]
})
export class SalesPerformanceFilterPageModule {}