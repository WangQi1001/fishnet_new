import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import { StorageService } from 'src/app/services/storage-service/storage.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private router: Router,
      private location: Location,
      private alertController: AlertController,
      private loadingController: LoadingController,
      private modalController: ModalController,
      private storageService: StorageService
  ) { }

  ngOnInit() {
    //get user from db
    // const userSession = localStorage.getItem('user_session');
    // if (userSession === undefined || userSession == null) {
    //   this.router.navigate(['/signin']);
    // }
    this.storageService.get("session_id").then(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
        this.router.navigate(['/signin']);
      }
    );
  }
  async logout() {
    //logout user and navigate to login page
    this.router.navigate(['/signin'])
  }

  async enterMyLike() {
    await this.router.navigate(['/mylike'], {replaceUrl: true});
  }

  async enterMyPost() {
    await this.router.navigate(['/mypost'], {replaceUrl: true});
  }
  async enterMyShop() {
    await this.router.navigate(['/myshop'], {replaceUrl: true});
  }
  async enterMyPayment() {
    await this.router.navigate(['/profile-payment'], {replaceUrl: true});
  }
  async enterMyOrder() {
    await this.router.navigate(['/my-order'], {replaceUrl: true});
  }
  async enterMySetting() {
    await this.router.navigate(['/my-setting'], {replaceUrl: true});
  }
  async enterCouponSaved() {
    await this.router.navigate(['/coupon-saved'], {replaceUrl: true});
  }
  async openShopRegister() {
    await this.router.navigate(['/shop-register-main'], {replaceUrl: true});
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
  // fAvD8glFSk-vg7FqTIdVSD:APA91bFu7bVsPdEev4MmEDDjb3ZN2OJpFOgf4j3RRXUEfzphvqO17IgxIPOHvABnEilFE33Hpii8ZiZkdv6sSLqQeDL9QuFp5L5zlv_Om13NHILZXIuKAO9lA939j1VW4tjUUA0Y7PA6
  // fAvD8glFSk-vg7FqTIdVSD:APA91bFu7bVsPdEev4MmEDDjb3ZN2OJpFOgf4j3RRXUEfzphvqO17IgxIPOHvABnEilFE33Hpii8ZiZkdv6sSLqQeDL9QuFp5L5zlv_Om13NHILZXIuKAO9lA939j1VW4tjUUA0Y7PA6
}
