import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatroomPagePage } from './chatroom-page.page';

const routes: Routes = [
  {
    path: '',
    component: ChatroomPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatroomPagePageRoutingModule {}
