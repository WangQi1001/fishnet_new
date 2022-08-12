import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipientInfoEditPageRoutingModule } from './recipient-info-edit-routing.module';

import { RecipientInfoEditPage } from './recipient-info-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RecipientInfoEditPageRoutingModule
  ],
  declarations: [RecipientInfoEditPage]
})
export class RecipientInfoEditPageModule {}
