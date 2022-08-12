import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCardComponent } from 'src/app/components/post/post-card/post-card.component';

import { ProfilePostPage } from './profile-post.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [PostCardComponent]
})
export class ProfilePostPageRoutingModule {}
