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
    await this.router.navigate(['ipygg/shop-homepage'], {replaceUrl: true})
  }

  async openShopCategoryFish(){
    await this.router.navigate(['ipygg/shop-category-fish'], {replaceUrl: true})
  }
  async openShopCategoryBird(){
    await this.router.navigate(['ipygg/shop-category-bird'], {replaceUrl: true})
  }
  async openShopCategoryFlower(){
    await this.router.navigate(['ipygg/shop-category-flower'], {replaceUrl: true})
  }
  async openShopCategoryInsect(){
    await this.router.navigate(['ipygg/shop-category-insect'], {replaceUrl: true})
  }
}
