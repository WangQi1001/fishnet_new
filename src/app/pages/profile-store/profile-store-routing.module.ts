import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileStorePage } from './profile-store.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileStorePageRoutingModule {}
