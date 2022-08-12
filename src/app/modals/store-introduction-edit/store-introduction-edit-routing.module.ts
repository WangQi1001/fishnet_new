import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreIntroductionEditPage } from './store-introduction-edit.page';

const routes: Routes = [
  {
    path: '',
    component: StoreIntroductionEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreIntroductionEditPageRoutingModule {}
