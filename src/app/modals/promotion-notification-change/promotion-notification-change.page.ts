import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-promotion-notification-change',
  templateUrl: './promotion-notification-change.page.html',
  styleUrls: ['./promotion-notification-change.page.scss'],
})
export class PromotionNotificationChangePage implements OnInit {
  typeDiscountInfo: any;
  fishProduct: boolean;
  birdProduct: boolean;
  flowerProduct: boolean;
  commodityProduct: boolean;


  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
    //drag info from db about above attributes
  }

  selectDiscountInfo(type) {
    this.typeDiscountInfo = type;
  }

  checkProducts(type) {
    if(type==='fish') {
      this.fishProduct = !this.fishProduct;
    }
    if(type==='bird') {
      this.birdProduct = !this.birdProduct;
    }
    if(type === 'flower') {
      this.flowerProduct = !this.flowerProduct;
    }
    if(type==='commodity'){
      this.commodityProduct = !this.commodityProduct;
    }
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalController.dismiss(closeModal);
  }

}
