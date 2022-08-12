import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadVideoFilterPage } from './upload-video-filter.page';

const routes: Routes = [
  {
    path: '',
    component: UploadVideoFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadVideoFilterPageRoutingModule {}