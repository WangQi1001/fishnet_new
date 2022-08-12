import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsEditPage } from './terms-edit.page';

const routes: Routes = [
  {
    path: '',
    component: TermsEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsEditPageRoutingModule {}
