import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardInfoEditPageRoutingModule } from './card-info-edit-routing.module';

import { CardInfoEditPage } from './card-info-edit.page';
// import {IonicInputMaskModule} from "@thiagoprz/ionic-input-mask";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    // IonicInputMaskModule,
    CardInfoEditPageRoutingModule
  ],
  declarations: [CardInfoEditPage]
})
export class CardInfoEditPageModule {}
