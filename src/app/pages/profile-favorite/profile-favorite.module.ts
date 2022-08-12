import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileFavoritePageRoutingModule } from './profile-favorite-routing.module';

import { ProfileFavoritePage } from './profile-favorite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProfileFavoritePageRoutingModule
  ],
  declarations: [ProfileFavoritePage]
})
export class ProfileFavoritePageModule {}
