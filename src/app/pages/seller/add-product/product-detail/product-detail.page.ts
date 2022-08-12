import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  private formData: FormGroup;
  private pageNumber = 1;

  moreDetail: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.formData = new FormGroup({
      productCategory: new FormControl(),
      productName: new FormControl(),
      price: new FormControl(),
      discount: new FormControl(),
      stock: new FormControl(),
      size_length: new FormControl(),
      size_height: new FormControl(),
      size_width: new FormControl(),
      weight: new FormControl
    })
  }

  onSubmit(){
    // Save data to DB
    // TODO: Account Check Validation
    console.log(this.formData.value)
  }

  openLessDetail(){
    this.moreDetail = false;
  }

  openMoreDetail(){
    this.moreDetail = true;
  }

  previousPage(){
    if (this.pageNumber === 1){
      this.router.navigate(['/product-category']);
    } 
    else{
      this.pageNumber--;
    }
    // console.log(this.pageNumber)  
  }

  nextPage(){
    this.router.navigate(['/product-description'])
  }

}
