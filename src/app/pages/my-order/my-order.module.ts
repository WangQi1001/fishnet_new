import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyOrderPageRoutingModule } from './my-order-routing.module';

import { MyOrderPage } from './my-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    MyOrderPageRoutingModule
  ],
  declarations: [MyOrderPage]
})
export class MyOrderPageModule {}
