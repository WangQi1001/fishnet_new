import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatroomPageTwoPage } from './chatroom-page-two.page';

const routes: Routes = [
  {
    path: '',
    component: ChatroomPageTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatroomPageTwoPageRoutingModule {}
