import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatroomPageRoutingModule } from './chatroom-routing.module';

import { ChatroomPage } from './chatroom.page';
import { ToolbarSellerComponent } from 'src/app/components/toolbar-seller/toolbar-seller.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatroomPageRoutingModule
  ],
  declarations: [ChatroomPage, ToolbarSellerComponent]
})
export class ChatroomPageModule {}
