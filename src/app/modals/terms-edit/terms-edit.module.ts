import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsEditPageRoutingModule } from './terms-edit-routing.module';

import { TermsEditPage } from './terms-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TermsEditPageRoutingModule
  ],
  declarations: [TermsEditPage]
})
export class TermsEditPageModule {}
