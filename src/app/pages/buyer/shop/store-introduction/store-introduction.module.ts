import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreIntroductionPageRoutingModule } from './store-introduction-routing.module';

import { StoreIntroductionPage } from './store-introduction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreIntroductionPageRoutingModule
  ],
  declarations: [StoreIntroductionPage]
})
export class StoreIntroductionPageModule {}
