import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { IonicModule } from '@ionic/angular';

import { UploadPhotoFilterPageRoutingModule } from './upload-photo-filter-routing.module';

import { UploadPhotoFilterPage } from './upload-photo-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UploadPhotoFilterPageRoutingModule,
    ImageCropperModule
  ],
  declarations: [UploadPhotoFilterPage]
})
export class UploadPhotoFilterPageModule {}