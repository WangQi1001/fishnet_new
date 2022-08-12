import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatroomPageTwoPageRoutingModule } from './chatroom-page-two-routing.module';

import { ChatroomPageTwoPage } from './chatroom-page-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatroomPageTwoPageRoutingModule
  ],
  declarations: [ChatroomPageTwoPage]
})
export class ChatroomPageTwoPageModule {}
