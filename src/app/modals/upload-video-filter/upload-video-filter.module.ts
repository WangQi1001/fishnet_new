import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadVideoFilterPageRoutingModule } from './upload-video-filter-routing.module';

import { UploadVideoFilterPage } from './upload-video-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UploadVideoFilterPageRoutingModule
  ],
  declarations: [UploadVideoFilterPage]
})
export class UploadVideoFilterPageModule {}