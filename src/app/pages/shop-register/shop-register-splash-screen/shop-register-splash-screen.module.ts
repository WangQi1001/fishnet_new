import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopRegisterSplashScreenPageRoutingModule } from './shop-register-splash-screen-routing.module';

import { ShopRegisterSplashScreenPage } from './shop-register-splash-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopRegisterSplashScreenPageRoutingModule
  ],
  declarations: [ShopRegisterSplashScreenPage]
})
export class ShopRegisterSplashScreenPageModule {}
