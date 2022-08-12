import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipientInfoEditPage } from './recipient-info-edit.page';

const routes: Routes = [
  {
    path: '',
    component: RecipientInfoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipientInfoEditPageRoutingModule {}
