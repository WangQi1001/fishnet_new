import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDeletePageRoutingModule } from './item-delete-routing.module';

import { ItemDeletePage } from './item-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDeletePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ItemDeletePage]
})
export class ItemDeletePageModule {}
