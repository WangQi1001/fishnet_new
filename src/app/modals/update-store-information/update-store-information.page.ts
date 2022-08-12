import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-update-store-information',
  templateUrl: './update-store-information.page.html',
  styleUrls: ['./update-store-information.page.scss'],
})
export class UpdateStoreInformationPage implements OnInit {

  constructor(
    private modalController: ModalController,
  ) {}

  ngOnInit() {
  }

  async close() {
    const closeModal = 'Modal Closed';
    await this.modalController.dismiss(closeModal);
  }
}
