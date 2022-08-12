import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sales-performance-filter',
  templateUrl: './sales-performance-filter.page.html',
  styleUrls: ['./sales-performance-filter.page.scss'],
})
export class SalesPerformanceFilterPage implements OnInit {
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