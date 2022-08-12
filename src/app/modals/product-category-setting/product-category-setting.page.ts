import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-product-category-setting',
  templateUrl: './product-category-setting.page.html',
  styleUrls: ['./product-category-setting.page.scss'],
})
export class ProductCategorySettingPage implements OnInit {

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
