import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductVisitRateFilterPage } from './product-visit-rate-filter.page';

const routes: Routes = [
  {
    path: '',
    component: ProductVisitRateFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductVisitRateFilterPageRoutingModule {}