import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromotionNotificationChangePageRoutingModule } from './promotion-notification-change-routing.module';

import { PromotionNotificationChangePage } from './promotion-notification-change.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PromotionNotificationChangePageRoutingModule
  ],
  declarations: [PromotionNotificationChangePage]
})
export class PromotionNotificationChangePageModule {}
