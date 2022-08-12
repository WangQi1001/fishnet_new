import { PromotionNotificationChangePage } from './../../modals/promotion-notification-change/promotion-notification-change.page';
import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import { PersonalInfoEditPage } from '../../modals/personal-info-edit/personal-info-edit.page';
import { PasswordChangePage } from '../../modals/password-change/password-change.page';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-my-setting',
  templateUrl: './my-setting.page.html',
  styleUrls: ['./my-setting.page.scss'],
})
export class MySettingPage implements OnInit {
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

  async presentPersonalInfoEditModal(){
    const modal = await this.modalController.create({
      component: PersonalInfoEditPage,
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
  async presentPasswordChangeModal(){
    const modal = await this.modalController.create({
      component: PasswordChangePage,
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

  async presentPromotionNotificationChangeModal() {
    const modal = await this.modalController.create({
      component: PromotionNotificationChangePage,
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
