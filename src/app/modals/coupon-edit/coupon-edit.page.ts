import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-coupon-edit',
  templateUrl: './coupon-edit.page.html',
  styleUrls: ['./coupon-edit.page.scss'],
})
export class CouponEditPage implements OnInit {
  isNext: boolean = false;
  type: any;

  constructor(
    private modalController: ModalController,
  ) {}

  ngOnInit() {
  }

  async clickNext() {
    this.isNext = true;
  }

  async selectType(r) {
    this.type = r;
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalController.dismiss(closeModal);
  }
}
