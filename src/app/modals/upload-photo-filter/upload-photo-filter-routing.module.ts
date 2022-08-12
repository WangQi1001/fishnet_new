import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadPhotoFilterPage } from './upload-photo-filter.page';

const routes: Routes = [
  {
    path: '',
    component: UploadPhotoFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadPhotoFilterPageRoutingModule {}
