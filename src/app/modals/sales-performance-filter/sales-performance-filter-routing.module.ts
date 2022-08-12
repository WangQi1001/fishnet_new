import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesPerformanceFilterPage } from './sales-performance-filter.page';

const routes: Routes = [
  {
    path: '',
    component: SalesPerformanceFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesPerformanceFilterPageRoutingModule {}