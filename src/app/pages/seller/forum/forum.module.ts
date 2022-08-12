import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForumPageRoutingModule } from './forum-routing.module';

import { ForumPage } from './forum.page';
import { ToolbarSellerComponent } from 'src/app/components/toolbar-seller/toolbar-seller.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumPageRoutingModule
  ],
  declarations: [ForumPage, ToolbarSellerComponent]
})
export class ForumPageModule {}
