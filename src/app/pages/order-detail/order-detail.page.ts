import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  shopID: any = "ShopID";
  shopNumber: any = '1122431423GHDB1213';
  productImg: any = 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg';
  mapImg: any = '../../../assets/icon/map-example.svg';
  logisticsMessage:any = [{
    time: '12:23',
    message: '完成付款'
  },{
    time: '12:23',
    message: '商家已接收訂單'
  },{
    time: '12:23',
    message: '速遞公司已收件'
  },{
    time: '12:23',
    message: '速遞已到達XXXXX'
  },{
    time: '12:23',
    message: '商品已送達'
  }];


  constructor(
      private router: Router,
      private location: Location,
      private alertController: AlertController,
      private loadingController: LoadingController,
      private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  goStore() {
    
  }

  goBack() {
    this.router.navigate(['/my-order']);
  }

}
