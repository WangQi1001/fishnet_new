import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatroomPagePageRoutingModule } from './chatroom-page-routing.module';

import { ChatroomPagePage } from './chatroom-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatroomPagePageRoutingModule
  ],
  declarations: [ChatroomPagePage]
})
export class ChatroomPagePageModule {}
