import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromotionInformationNoticePage } from './promotion-information-notice.page';

const routes: Routes = [
  {
    path: '',
    component: PromotionInformationNoticePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromotionInformationNoticePageRoutingModule {}
