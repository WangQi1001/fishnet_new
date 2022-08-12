import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileStorePageRoutingModule } from './profile-store-routing.module';

import { ProfileStorePage } from './profile-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProfileStorePageRoutingModule
  ],
  declarations: [ProfileStorePage]
})
export class ProfileStorePageModule {}
