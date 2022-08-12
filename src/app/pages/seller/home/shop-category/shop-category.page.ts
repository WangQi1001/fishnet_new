import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.page.html',
  styleUrls: ['./shop-category.page.scss'],
})
export class ShopCategoryPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  async goBack(){
    await this.router.navigate(['seller/homepage'])
  }

}
