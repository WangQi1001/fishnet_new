import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreIntroductionPage } from './store-introduction.page';

const routes: Routes = [
  {
    path: '',
    component: StoreIntroductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreIntroductionPageRoutingModule {}
