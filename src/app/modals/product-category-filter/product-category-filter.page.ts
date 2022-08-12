import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-category-filter',
  templateUrl: './product-category-filter.page.html',
  styleUrls: ['./product-category-filter.page.scss'],
})
export class ProductCategoryFilterPage implements OnInit {
  private formData: FormGroup;

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.formData = new FormGroup({
      productCategory: new FormControl(),
      startingPrice: new FormControl(),
      endingPrice: new FormControl(),

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
