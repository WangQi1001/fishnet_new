import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionRecordPage } from './transaction-record.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRecordPageRoutingModule {}