import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopRegisterMainPageRoutingModule } from './shop-register-main-routing.module';

import { ShopRegisterMainPage } from './shop-register-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShopRegisterMainPageRoutingModule
  ],
  declarations: [ShopRegisterMainPage]
})
export class ShopRegisterMainPageModule {}
