import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsNewsDetailPageRoutingModule } from './notifications-news-detail-routing.module';

import { NotificationsNewsDetailPage } from './notifications-news-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsNewsDetailPageRoutingModule
  ],
  declarations: [NotificationsNewsDetailPage]
})
export class NotificationsNewsDetailPageModule {}
