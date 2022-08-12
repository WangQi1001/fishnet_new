import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardInfoEditPage } from './card-info-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CardInfoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardInfoEditPageRoutingModule {}
