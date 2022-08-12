import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffAddPageRoutingModule } from './staff-add-routing.module';

import { StaffAddPage } from './staff-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    StaffAddPageRoutingModule
  ],
  declarations: [StaffAddPage]
})
export class CouponAddPageModule {}