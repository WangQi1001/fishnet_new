import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-finish-add-product',
  templateUrl: './finish-add-product.page.html',
  styleUrls: ['./finish-add-product.page.scss'],
})
export class FinishAddProductPage implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  nextPage(){
    this.router.navigate(['/seller/homepage'])
  }

}
