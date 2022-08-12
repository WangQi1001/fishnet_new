import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StoreIntroductionEditPage} from '../../../modals/store-introduction-edit/store-introduction-edit.page';
import {IonRouterOutlet, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-store-introduction',
  templateUrl: './store-introduction.page.html',
  styleUrls: ['./store-introduction.page.scss'],
})
export class StoreIntroductionPage implements OnInit {
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

  async goBack() {
    await this.router.navigate(['/seller/homepage'], {replaceUrl: true});
  }
}
