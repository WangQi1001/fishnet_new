import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForumPageRoutingModule } from './forum-routing.module';

import { ForumPage } from './forum.page';
import { ToolbarBuyerComponent } from 'src/app/components/toolbar-buyer/toolbar-buyer.component';
import { PostCardComponent } from 'src/app/components/post/post-card/post-card.component';
import { PostCommentCardComponent } from 'src/app/components/post/post-card/post-comment-card/post-comment-card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumPageRoutingModule
  ],
  declarations: 
  [ForumPage, 
  ToolbarBuyerComponent, 
  PostCardComponent,
  PostCommentCardComponent]
})
export class ForumPageModule {}
