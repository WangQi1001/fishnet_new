import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-chat-room-setting',
  templateUrl: './chat-room-setting.page.html',
  styleUrls: ['./chat-room-setting.page.scss'],
})
export class ChatRoomSettingPage implements OnInit {
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
