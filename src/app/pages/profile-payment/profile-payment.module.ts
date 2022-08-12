import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePaymentPageRoutingModule } from './profile-payment-routing.module';

import { ProfilePaymentPage } from './profile-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProfilePaymentPageRoutingModule
  ],
  declarations: [ProfilePaymentPage]
})
export class ProfilePaymentPageModule {}
