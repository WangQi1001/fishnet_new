import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ShippingEditPage} from '../../../modals/shipping-edit/shipping-edit.page';
import {IonRouterOutlet, ModalController} from "@ionic/angular";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.page.html',
  styleUrls: ['./shipping.page.scss'],
})
export class ShippingPage implements OnInit {
  modalDataResponse: any;

  constructor(
      private router: Router,
      private modalController: ModalController,
      private routerOutlet: IonRouterOutlet,
  ) { }

  ngOnInit() {
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

  async goBack() {
    await this.router.navigate(['/seller/homepage'], {replaceUrl: true});
  }
}
