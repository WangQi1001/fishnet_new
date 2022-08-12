import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateStoreInformationPageRoutingModule } from './update-store-information-routing.module';

import { UpdateStoreInformationPage } from './update-store-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdateStoreInformationPageRoutingModule
  ],
  declarations: [UpdateStoreInformationPage]
})
export class UpdateStoreInformationPageModule {}
