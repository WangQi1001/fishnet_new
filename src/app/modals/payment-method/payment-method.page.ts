import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-recipient-info-edit',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
})
export class PaymentMethodPage implements OnInit {
  form: FormGroup;
  cardNumber: any;
  cardName: any;
  expireDate: any;
  cvcCode: any;
  modalDataResponse: any;
  succeed: boolean;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    // private routerOutlet: IonRouterOutlet,
  ) {
    this.form = formBuilder.group({
      cardNumber: ['', Validators.required],
      cardName: ['', Validators.required],
      expireDate: ['', Validators.required],
      cvcCode: ['', Validators.required],
    });
    this.cardNumber = this.form.controls.recipient;
    this.cardName = this.form.controls.recipient;
    this.expireDate = this.form.controls.recipient;
    this.cvcCode = this.form.controls.recipient;
  }

  ngOnInit() {
    this.succeed = false;
  }

  async confirmButton() {
    this.succeed = true;
  }

  async close() {
    const closeModal = 'Modal Closed';
    await this.modalController.dismiss(closeModal);
  }

}
