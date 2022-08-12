import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-recipient-info-edit',
  templateUrl: './recipient-info-edit.page.html',
  styleUrls: ['./recipient-info-edit.page.scss'],
})
export class RecipientInfoEditPage implements OnInit {
  form: FormGroup;
  recipient: any;
  shippingMethod: any;
  phone: any;
  room: any;
  floor: any;
  numberOfSeats: any;
  buildingName: any;
  streetName: any;
  map: any;
  region: any;
  shippingTypes: ["速遞"];

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
  ) { 
    this.form = formBuilder.group({
      recipient: ['', Validators.required], 
      shippingMethod: ['', Validators.required], 
      phone: ['', Validators.required],
      room: ['', Validators.required],
      floor: ['', Validators.required],
      numberOfSeats: ['', Validators.required],
      buildingName: ['', Validators.required],
      streetName: ['', Validators.required],
      map: ['', Validators.required],
      region: ['', Validators.required],
    });
    this.recipient = this.form.controls.recipient;
    this.shippingMethod = this.form.controls.shippingMethod;
    this.phone = this.form.controls.phone;
    this.room = this.form.controls.room;
    this.floor = this.form.controls.floor;
    this.numberOfSeats = this.form.controls.numberOfSeats;
    this.buildingName = this.form.controls.buildingName;
    this.streetName = this.form.controls.streetName;
    this.map = this.form.controls.map;
  }

  ngOnInit() {
     //setValue of input fields from db like:  this.expectedAmount.setValue(this.data.amount);
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalController.dismiss(closeModal);
  }

  selectRegion(r) {
    this.region = r;
    this.form.patchValue({
      region: this.region
    })
  }
  updateRecipient() {
    
  }

}
