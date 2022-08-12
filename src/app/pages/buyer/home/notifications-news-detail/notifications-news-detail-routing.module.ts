import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsNewsDetailPage } from './notifications-news-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsNewsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsNewsDetailPageRoutingModule {}
