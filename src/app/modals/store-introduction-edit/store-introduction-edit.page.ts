import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-store-introduction-edit',
  templateUrl: './store-introduction-edit.page.html',
  styleUrls: ['./store-introduction-edit.page.scss'],
})
export class StoreIntroductionEditPage implements OnInit {

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
