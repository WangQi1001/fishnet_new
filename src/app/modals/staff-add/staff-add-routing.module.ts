import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffAddPage } from './staff-add.page';

const routes: Routes = [
  {
    path: '',
    component: StaffAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffAddPageRoutingModule {}