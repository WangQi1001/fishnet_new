import { Component, OnInit } from '@angular/core';
import {AlertController, IonRouterOutlet, LoadingController, ModalController} from '@ionic/angular';
import { ProfileExtractMoneyPage } from 'src/app/modals/profile-extract-money/profile-extract-money.page';
import {Router} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  modalDataResponse: any;


  constructor(
    private router: Router,
    private location: Location,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {
  }

  async logout() {
    //logout user and navigate to login page
    this.router.navigate(['/signin'])
  }

  async enterCoupon() {
    await this.router.navigate(['seller/coupon'], {replaceUrl: true});
  }
  async enterMyPost() {
    await this.router.navigate(['/mypost'], {replaceUrl: true});
  }
  async enterMyPayment() {
    await this.router.navigate(['/profile-payment'], {replaceUrl: true});
  }
  async enterMyOrder() {
    await this.router.navigate(['/my-order'], {replaceUrl: true});
  }
  async enterTransactionRecord() {
     await this.router.navigate(['/transaction-record'], {replaceUrl: true});
  }
  async enterMySetting() {
    await this.router.navigate(['seller/setting'], {replaceUrl: true});
  }
  async enterStaff() {
    await this.router.navigate(['seller/staff'], {replaceUrl: true});
  }
  async convertToBuyerPage() {
    await this.router.navigate(['/homepage-new'], {replaceUrl: true});
  }
  async enterAboutUs() {
    await this.router.navigate(['/aboutus'], {replaceUrl: true});
  }
  async enterPrivacyPolicy() {
    await this.router.navigate(['/privacy-policy'], {replaceUrl: true});
  }
  async enterContactUs() {
    await this.router.navigate(['/contact-us'], {replaceUrl: true});
  }

  async presentExtractMoneyModal(){
    const modal = await this.modalController.create({
      component: ProfileExtractMoneyPage,
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
