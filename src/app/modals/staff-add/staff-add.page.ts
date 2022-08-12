import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.page.html',
  styleUrls: ['./staff-add.page.scss'],
})
export class StaffAddPage implements OnInit {
  isNext = false;
  couponType = 0;
  couponCondition = 0;
  type: any;

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

  async selectType(r) {
    this.type = r;
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalController.dismiss(closeModal);
  }
}
