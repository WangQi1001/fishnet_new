import { CardInfoEditPage } from './../../modals/card-info-edit/card-info-edit.page';
import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-profile-payment',
  templateUrl: './profile-payment.page.html',
  styleUrls: ['./profile-payment.page.scss'],
})
export class ProfilePaymentPage implements OnInit {
  cardImg: any = '../../../assets/icon/masterCard.svg';
  cardNumber: any = "123-*****-9202";
  cardDate: any = "09/2023";
  modalDataResponse: any;

  constructor(
      private router: Router,
      private location: Location,
      private alertController: AlertController,
      private loadingController: LoadingController,
      private modalController: ModalController,
      private routerOutlet: IonRouterOutlet,
  ) { }

  ngOnInit() {
  }

  async goBack() {
    await this.router.navigate(['/profile'], {replaceUrl: true});
  }

  async presentCardInfoEditModal(){
    const modal = await this.modalController.create({
      component: CardInfoEditPage,
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
}
