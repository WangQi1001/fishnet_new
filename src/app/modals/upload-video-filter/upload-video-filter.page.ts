import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-upload-video-filter',
  templateUrl: './upload-video-filter.page.html',
  styleUrls: ['./upload-video-filter.page.scss'],
})
export class UploadVideoFilterPage implements OnInit {

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