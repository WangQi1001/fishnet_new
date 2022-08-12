import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalInfoEditPageRoutingModule } from './personal-info-edit-routing.module';

import { PersonalInfoEditPage } from './personal-info-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PersonalInfoEditPageRoutingModule
  ],
  declarations: [PersonalInfoEditPage]
})
export class PersonalInfoEditPageModule {}
