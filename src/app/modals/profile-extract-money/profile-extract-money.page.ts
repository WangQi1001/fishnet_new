import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CardInfoEditPage } from './../../modals/card-info-edit/card-info-edit.page';


@Component({
  selector: 'app-profile-extract-money',
  templateUrl: './profile-extract-money.page.html',
  styleUrls: ['./profile-extract-money.page.scss'],
})
export class ProfileExtractMoneyPage implements OnInit {
  cardImg: any = '../../../assets/icon/masterCard.svg';
  cardNumber: any = "123-*****-9202";
  cardDate: any = "09/2023";
  cardHolderName: any = "Chan Tai Man"

  modalDataResponse: any;

  private formData: FormGroup;

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.formData = new FormGroup({
      withdrawalAmount: new FormControl()
    })
  }

  onSubmit(){
    // Save data to DB
    // TODO: Account Check Validation
    console.log(this.formData.value)
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalController.dismiss(closeModal);
  }

}
