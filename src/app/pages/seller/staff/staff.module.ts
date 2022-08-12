import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffPageRoutingModule } from './staff-routing.module';

import { StaffPage } from './staff.page';
import { ToolbarBuyerComponent } from 'src/app/components/toolbar-buyer/toolbar-buyer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffPageRoutingModule
  ],
  declarations: [StaffPage, ToolbarBuyerComponent]
})
export class StaffPageModule {}
