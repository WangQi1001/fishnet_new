import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatRoomSettingPage } from './chat-room-setting.page';

const routes: Routes = [
  {
    path: '',
    component: ChatRoomSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoomSettingPageRoutingModule {}
