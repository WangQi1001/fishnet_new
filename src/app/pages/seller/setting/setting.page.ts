import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StoreIntroductionEditPage} from '../../../modals/store-introduction-edit/store-introduction-edit.page';
import {IonRouterOutlet, ModalController} from '@ionic/angular';
import {ShippingEditPage} from '../../../modals/shipping-edit/shipping-edit.page';
import {TermsEditPage} from '../../../modals/terms-edit/terms-edit.page';
import {PasswordChangePage} from '../../../modals/password-change/password-change.page';
import {ChatRoomSettingPage} from '../../../modals/chat-room-setting/chat-room-setting.page';
import {PromotionInformationNoticePage} from '../../../modals/promotion-information-notice/promotion-information-notice.page';
import {UpdateStoreInformationPage} from '../../../modals/update-store-information/update-store-information.page';
import {ProductCategorySettingPage} from '../../../modals/product-category-setting/product-category-setting.page';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  modalDataResponse: any;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
  ) { }

  ngOnInit() {
  }

  async presentStoreIntroductionEditModal(){
    const modal = await this.modalController.create({
      component: StoreIntroductionEditPage,
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

  async presentShippingEditModal(){
    const modal = await this.modalController.create({
      component: ShippingEditPage,
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

  async presentTermsEditModal(){
    const modal = await this.modalController.create({
      component: TermsEditPage,
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

  async presentChatRoomSettingModal(){
    const modal = await this.modalController.create({
      component: ChatRoomSettingPage,
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

  async presentPromotionInformationNoticeModal(){
    const modal = await this.modalController.create({
      component: PromotionInformationNoticePage,
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

  async presentUpdateStoreInformationModal(){
    const modal = await this.modalController.create({
      component: UpdateStoreInformationPage,
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

  async presentProductCategorySettingModal(){
    const modal = await this.modalController.create({
      component: ProductCategorySettingPage,
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
