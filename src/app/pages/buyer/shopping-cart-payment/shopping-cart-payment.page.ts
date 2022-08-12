import { RecipientInfoEditPageModule } from './../../../modals/recipient-info-edit/recipient-info-edit.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import {Router} from '@angular/router';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import { RecipientInfoEditPage } from 'src/app/modals/recipient-info-edit/recipient-info-edit.page';
import { PaymentMethodPage } from '../../../modals/payment-method/payment-method.page';


@Component({
  selector: 'app-shopping-cart-payment',
  templateUrl: './shopping-cart-payment.page.html',
  styleUrls: ['./shopping-cart-payment.page.scss'],
})
export class ShoppingCartPaymentPage implements OnInit {

  modalDataResponse: any;
  items = [{
    "id": 1,
    "name": "ShopID",
    "date": "14:30",
    "product": [{
      "pid": 1,
      "name": "產品名稱",
      "price": 200,
      "discount": 100,
      "quantity": 1,
      "img": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      "selected": false
    }]
  }];
  coupon = 20;

  shipping = {
    "method": "速遞",
    "address": "xxxxxxxxxx",
    "recipient": "Chan Tai Man",
    "number": "1234 5678",
    "price": 20
  }

  constructor(
      private router: Router,
      private alertController: AlertController,
      private loadingController: LoadingController,
      private modalController: ModalController,
      private routerOutlet: IonRouterOutlet,
  ) { }

  ngOnInit() {
  }

  finalPrice(id,pid){
    for(let item of this.items){
      if(item.id === id) {
        for(let product of item.product){
          if(product.pid===pid){
            return product.price - product.discount - this.coupon;
          }
        }
      }
    }
  }
  getTotalQuantity(){
    let total = 0;
    for(let item of this.items){
      for(let product of item.product){
        total+=product.quantity;
      }
    }
    return total;
  }
  getTotalPrice(){
    let total = 0;
    for(let item of this.items){
      for(let product of item.product){
        total+=(product.price-product.discount)*product.quantity;
      }
    }
    if(total === 0) {
      return total;
    }
    return total - this.coupon + this.shipping.price;
  }

  async presentRecipientInfoEditModal(){
    const modal = await this.modalController.create({
      component: RecipientInfoEditPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }

  async presentPaymentMethodModal(){
    const modal = await this.modalController.create({
      component: PaymentMethodPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }

  async goBack(){
    await this.router.navigate(['shopping-cart'], {replaceUrl: true});
  }

}
