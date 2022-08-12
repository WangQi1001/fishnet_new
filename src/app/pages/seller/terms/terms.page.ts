import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IonRouterOutlet, ModalController} from '@ionic/angular';
import {TermsEditPage} from '../../../modals/terms-edit/terms-edit.page';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {
  modalDataResponse: any;

  constructor(
      private router: Router,
      private modalController: ModalController,
      private routerOutlet: IonRouterOutlet,
  ) { }

  ngOnInit() {
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

  async goBack() {
    await this.router.navigate(['/seller/homepage'], {replaceUrl: true});
  }
}
