import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateStoreInformationPage } from './update-store-information.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateStoreInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateStoreInformationPageRoutingModule {}
