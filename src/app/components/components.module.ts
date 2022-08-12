import { IonicModule } from '@ionic/angular';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [
    OrderDetailComponent
  ]
})
export class ComponentsModule { }
