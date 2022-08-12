import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionRecordFilterPageRoutingModule } from './transaction-record-filter-routing.module';

import { TransactionRecordFilterPage } from './transaction-record-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TransactionRecordFilterPageRoutingModule
  ],
  declarations: [TransactionRecordFilterPage]
})
export class TransactionRecordFilterPageModule {}