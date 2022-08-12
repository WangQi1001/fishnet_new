import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CouponEditPage} from '../../../modals/coupon-edit/coupon-edit.page';
import {CouponAddPage} from '../../../modals/coupon-add/coupon-add.page';
import {IonRouterOutlet, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.page.html',
  styleUrls: ['./coupon.page.scss'],
})
export class CouponPage implements OnInit {
  modalDataResponse: any;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
  ) { }

  ngOnInit() {
  }

  async presentCouponEditModal(){
    const modal = await this.modalController.create({
      component: CouponEditPage,
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

  async presentCouponAddModal(){
    const modal = await this.modalController.create({
      component: CouponAddPage,
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

  async goBack() {
    await this.router.navigate(['seller/profile'], {replaceUrl: true});
  }
}
