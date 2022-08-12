import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.page.html',
  styleUrls: ['./item-edit.page.scss'],
})
export class ItemEditPage implements OnInit {

  private formData: FormGroup;
  private pageNumber: number;
  private type: string;
  private finished: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute
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
    });
    this.route.queryParams.subscribe(async params => {
      if (params.hasOwnProperty('type')) {
        this.type = params.type;
      }
    });
    this.pageNumber = 1;
    this.finished = false;
  }

  async goBack(){
    await this.router.navigate(['/seller/product']);
    this.pageNumber = 1;
  }

  onSubmit(){
    console.log(this.formData.value);
  }

  nextPage(){
    this.pageNumber ++;
  }

  goPreviousPage(){
    if (this.pageNumber === 1) {
      this.router.navigate(['/seller/product']);
    } else {
      this.pageNumber --;
    }
  }

  finishAddingProduct() {
    this.finished = true;
  }

}
