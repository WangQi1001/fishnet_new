import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePostPageRoutingModule } from './profile-post-routing.module';

import { ProfilePostPage } from './profile-post.page';
import { PostCardComponent } from 'src/app/components/post/post-card/post-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProfilePostPageRoutingModule
  ],
  declarations: [ProfilePostPage, PostCardComponent]
})
export class ProfilePostPageModule {}
