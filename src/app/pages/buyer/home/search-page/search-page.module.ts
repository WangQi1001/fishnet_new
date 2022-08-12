import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPagePageRoutingModule } from './search-page-routing.module';

import { SearchPagePage } from './search-page.page';
import { ToolbarBuyerComponent } from 'src/app/components/toolbar-buyer/toolbar-buyer.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPagePageRoutingModule
  ],
  declarations: [
    SearchPagePage, 
    ToolbarBuyerComponent,
    ProductCardComponent,
    SearchBarComponent
  ]
})
export class SearchPagePageModule {}
