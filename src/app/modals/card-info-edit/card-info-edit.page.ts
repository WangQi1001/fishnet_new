import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-card-info-edit',
  templateUrl: './card-info-edit.page.html',
  styleUrls: ['./card-info-edit.page.scss'],
})
export class CardInfoEditPage implements OnInit {
  form: FormGroup;
  name: any;
  cardNumber: any;
  cardDate: any;
  cvc: any;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
  ) { 
    this.form = formBuilder.group({
      name: ['', Validators.required],
      cardNumber: ['', Validators.required],
      cardDate: ['', Validators.required],
      cvc: ['', Validators.required],
    });
    this.name = this.form.controls.name;
    this.cardNumber = this.form.controls.cardNumber;
    this.cardDate = this.form.controls.cardDate;
    this.cvc = this.form.controls.cvc;
  }

  ngOnInit() {
    //setValue of input fields from db like:  this.expectedAmount.setValue(this.data.amount);
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalController.dismiss(closeModal);
  }

  updateCardInfo() {
    
  }

}
