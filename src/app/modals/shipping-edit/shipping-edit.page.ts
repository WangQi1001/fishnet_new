import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-shipping-edit',
  templateUrl: './shipping-edit.page.html',
  styleUrls: ['./shipping-edit.page.scss'],
})
export class ShippingEditPage implements OnInit {

  constructor(
    private modalController: ModalController,
  ) {}

  ngOnInit() {
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalController.dismiss(closeModal);
  }
}
