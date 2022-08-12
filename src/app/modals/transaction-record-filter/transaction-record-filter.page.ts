import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
@Component({
  selector: 'app-transaction-record-filter',
  templateUrl: './transaction-record-filter.page.html',
  styleUrls: ['./transaction-record-filter.page.scss'],
})
export class TransactionRecordFilterPage implements OnInit {
  private formData: FormGroup;
  productCategory: any ="Fish";
  recordCategory: any = "Sales";
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

  selectRecordCategory(r) {
    this.recordCategory = r;
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