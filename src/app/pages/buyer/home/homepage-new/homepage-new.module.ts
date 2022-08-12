import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepageNewPageRoutingModule } from './homepage-new-routing.module';

import { HomepageNewPage } from './homepage-new.page';
import { ToolbarBuyerComponent } from 'src/app/components/toolbar-buyer/toolbar-buyer.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepageNewPageRoutingModule
  ],
  declarations: [
    HomepageNewPage, 
    ToolbarBuyerComponent, 
    ProductCardComponent,
    SearchBarComponent
  ]
})
export class HomepageNewPageModule {}
