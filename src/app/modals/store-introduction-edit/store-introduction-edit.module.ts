import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreIntroductionEditPageRoutingModule } from './store-introduction-edit-routing.module';

import { StoreIntroductionEditPage } from './store-introduction-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    StoreIntroductionEditPageRoutingModule
  ],
  declarations: [StoreIntroductionEditPage]
})
export class StoreIntroductionEditPageModule {}
