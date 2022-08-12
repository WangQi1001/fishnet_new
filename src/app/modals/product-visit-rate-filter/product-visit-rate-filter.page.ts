import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-visit-rate-filter',
  templateUrl: './product-visit-rate-filter.page.html',
  styleUrls: ['./product-visit-rate-filter.page.scss'],
})
export class ProductVisitRateFilterPage implements OnInit {
  private formData: FormGroup;
  productCategory: any ="Fish";
  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.formData = new FormGroup({

    })
  }

  selectProductCategory(c) {
    this.productCategory = c;
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