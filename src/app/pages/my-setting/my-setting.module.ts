import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MySettingPageRoutingModule } from './my-setting-routing.module';

import { MySettingPage } from './my-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MySettingPageRoutingModule
  ],
  declarations: [MySettingPage]
})
export class MySettingPageModule {}
