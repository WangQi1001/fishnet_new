import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-seller-top',
  templateUrl: './toolbar-seller-top.component.html',
  styleUrls: ['./toolbar-seller-top.component.scss'],
})
export class ToolbarSellerTopComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  async openShopCategory(){
    await this.router.navigate(['seller/shop-category'])
  }

  async openShopCategory2(){
    await this.router.navigate(['seller/shop-category-two'])
  }

}
