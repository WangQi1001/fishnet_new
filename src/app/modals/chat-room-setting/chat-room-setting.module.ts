import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatRoomSettingPageRoutingModule } from './chat-room-setting-routing.module';

import { ChatRoomSettingPage } from './chat-room-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ChatRoomSettingPageRoutingModule
  ],
  declarations: [ChatRoomSettingPage]
})
export class ChatRoomSettingPageModule {}
