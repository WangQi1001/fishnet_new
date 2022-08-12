import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileExtractMoneyPageRoutingModule } from './profile-extract-money-routing.module';

import { ProfileExtractMoneyPage } from './profile-extract-money.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfileExtractMoneyPageRoutingModule
  ],
  declarations: [ProfileExtractMoneyPage]
})
export class ProfileExtractMoneyPageModule {}
