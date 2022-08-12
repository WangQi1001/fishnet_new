import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-order-rating',
  templateUrl: './order-rating.page.html',
  styleUrls: ['./order-rating.page.scss'],
})
export class OrderRatingPage implements OnInit {
  condition: number = 0;
  list: any[] = new Array(5);

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalController.dismiss(closeModal);
  }

  determineRating() {

  }
  review(i) {
    this.condition = i + 1;
    // your code........
 }
  

}
