import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.page.html',
  styleUrls: ['./product-description.page.scss'],
})
export class ProductDescriptionPage implements OnInit {

  private formData: FormGroup;


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

  previousPage(){
    
      this.router.navigate(['/product-detail']);
    
    // console.log(this.pageNumber)  
  }

  nextPage(){
    this.router.navigate(['/upload-photo'])
  }

}
