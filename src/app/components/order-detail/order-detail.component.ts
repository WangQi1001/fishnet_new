import { OrderRatingPage } from './../../modals/order-rating/order-rating.page';
import { Component, OnInit, Input } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  @Input() shopID: any = 'shopID';
  @Input() shopNumber: any = '1122431423GHDB1213';
  @Input() productImg: any = 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg';
  @Input() productName: any = "產品名稱";
  @Input() originalPrice: any = 200;
  @Input() quantity: any = 1;
  @Input() total: any = 100;
  @Input() discountPrice: any = 100;
  @Input() coupon: any = 20;
  @Input() shippingPrice: any = 20;
  @Input() shippingMethod: any = "速遞";
  @Input() storeRegistrationTime: any = "9:30 AM - 4 PM";
  @Input() deliveryAddress: any = "xxxxxxxxx";
  @Input() recipient: any = "Chan Tai Man";
  @Input() recipientPhoneNumber: any = "123456";
  modalDataResponse: any;




  constructor(
      private router: Router,
      private location: Location,
      private alertController: AlertController,
      private loadingController: LoadingController,
      private modalController: ModalController,
      private routerOutlet: IonRouterOutlet,
  ) { }

  ngOnInit() {}

  async presentOrderRatingModal(){
    const modal = await this.modalController.create({
      component: OrderRatingPage,
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
  async goLogistics(){
    await this.router.navigate(['/order-detail'], {replaceUrl: true});
  }


}
