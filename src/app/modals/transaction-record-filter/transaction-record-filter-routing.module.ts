import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionRecordFilterPage } from './transaction-record-filter.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionRecordFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRecordFilterPageRoutingModule {}