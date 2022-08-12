import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-product-delivery',
  templateUrl: './add-product-delivery.page.html',
  styleUrls: ['./add-product-delivery.page.scss'],
})
export class AddProductDeliveryPage implements OnInit {

  private formData: FormGroup;
  private pageNumber = 1;
  region: any;
  region2: any;
  region3: any;
  region4: any;
  region5: any;
  label1Added: boolean = false;
  label2Added: boolean = false;
  label3Added: boolean = false;
  label4Added: boolean = false;
  label5Added: boolean = false;
  label6Added: boolean = false;
  selectedId:number=0;
  deliveryType1 = 0;
  deliveryType2 = 0;
  deliveryType3 = 0;
  deliveryType4 = 0;
  deliveryType5 = 0;
  isNext1 = false;
  isNext2 = false;
  isNext3 = false;
  isNext4 = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.formData = new FormGroup({
      
    })
  }

  onSubmit(){
    // Save data to DB
    // TODO: Account Check Validation
    console.log(this.formData.value)
  }

  changeDeliveryType1(e) {
    this.deliveryType1 = e.target.value;
  }

  changeDeliveryType2(e) {
    this.deliveryType2 = e.target.value;
  }

  changeDeliveryType3(e) {
    this.deliveryType3 = e.target.value;
  }

  changeDeliveryType4(e) {
    this.deliveryType4 = e.target.value;
  }

  changeDeliveryType5(e) {
    this.deliveryType5 = e.target.value;
  }

  selectRegion(r) {
    this.region = r;
  }

  selectRegion2(r) {
    this.region2 = r;
  }

  selectRegion3(r) {
    this.region3 = r;
  }

  selectRegion4(r) {
    this.region4 = r;
  }

  selectRegion5(r) {
    this.region5 = r;
  }

  addLabel1(){   
    if (this.label1Added === true) {
      this.label1Added = false;
    } else {
      this.label1Added = true;
    }
  }

  addLabel2(){   
    if (this.label2Added === true) {
      this.label2Added = false;
    } else {
      this.label2Added = true;
    }
  }

  addLabel3(){    
    if (this.label3Added === true) {
      this.label3Added = false;
    } else {
      this.label3Added = true;
    }
  }

  addLabel4(){   
    if (this.label4Added === true) {
      this.label4Added = false;
    } else {
      this.label4Added = true;
    }
  }

  addLabel5(){   
    if (this.label5Added === true) {
      this.label5Added = false;
    } else {
      this.label5Added = true;
    }
  }

  addLabel6(){    
    if (this.label6Added === true) {
      this.label6Added = false;
    } else {
      this.label6Added = true;
    }
  }

  previousPage(){
    if (this.pageNumber === 1){
      this.router.navigate(['/upload-photo']);
    } 
    else{
      this.pageNumber--;
    }
    // console.log(this.pageNumber)  
  }

  nextPage(){
    if (this.pageNumber === 1){
      this.pageNumber++;
    } 
    else{
      this.router.navigate(['/finish-add-product']);
    }
  }

  clickNext1() {
    this.isNext1 = true;
  }

  clickNext2() {
    this.isNext2 = true;
  }

  clickNext3() {
    this.isNext3 = true;
  }

  clickNext4() {
    this.isNext4 = true;
  }


}
