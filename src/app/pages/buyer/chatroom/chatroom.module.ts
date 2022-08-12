import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatroomPageRoutingModule } from './chatroom-routing.module';

import { ChatroomPage } from './chatroom.page';
import { ToolbarBuyerComponent } from 'src/app/components/toolbar-buyer/toolbar-buyer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatroomPageRoutingModule
  ],
  declarations: [ChatroomPage, ToolbarBuyerComponent]
})
export class ChatroomPageModule {}
