import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionRecordPageRoutingModule } from './transaction-record-routing.module';

import { TransactionRecordPage } from './transaction-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    TransactionRecordPageRoutingModule
  ],
  declarations: [TransactionRecordPage]
})
export class TransactionRecordPageModule {}