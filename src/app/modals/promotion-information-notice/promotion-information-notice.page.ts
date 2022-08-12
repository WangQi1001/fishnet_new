import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-promotion-information-notice',
  templateUrl: './promotion-information-notice.page.html',
  styleUrls: ['./promotion-information-notice.page.scss'],
})
export class PromotionInformationNoticePage implements OnInit {
  isNext = false;
  couponType = 0;
  couponCondition = 0;

  constructor(
    private modalController: ModalController,
  ) {}

  ngOnInit() {
  }

  async clickNext() {
    this.isNext = true;
  }

  async changeCouponType(e) {
    this.couponType = e.target.value;
  }

  async changeCouponCondition(e) {
    this.couponCondition = e.target.value;
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalController.dismiss(closeModal);
  }
}
