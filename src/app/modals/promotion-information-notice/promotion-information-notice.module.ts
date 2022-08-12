import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromotionInformationNoticePageRoutingModule } from './promotion-information-notice-routing.module';

import { PromotionInformationNoticePage } from './promotion-information-notice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PromotionInformationNoticePageRoutingModule
  ],
  declarations: [PromotionInformationNoticePage]
})
export class PromotionInformationNoticePageModule {}
