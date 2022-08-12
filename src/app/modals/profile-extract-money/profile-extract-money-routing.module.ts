import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileExtractMoneyPage } from './profile-extract-money.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileExtractMoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileExtractMoneyPageRoutingModule {}
