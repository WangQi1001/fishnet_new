import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromotionNotificationChangePage } from './promotion-notification-change.page';

const routes: Routes = [
  {
    path: '',
    component: PromotionNotificationChangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromotionNotificationChangePageRoutingModule {}
