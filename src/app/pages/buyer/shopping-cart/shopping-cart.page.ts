import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  items = [{
    "id": 1,
    "name": "ShopID",
    "date": "14:30",
    "product": [{
      "pid": 1,
      "name": "產品名稱",
      "price": 200,
      "discount": 100,
      "quantity": 1,
      "img": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      "selected": false
    }]
  },
  {
    "id": 2,
    "name": "ShopID",
    "date": "12:30",
    "product": [{
      "pid": 1,
      "name": "產品名稱",
      "price": 200,
      "discount": 100,
      "quantity": 1,
      "img": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      "selected": false
    },{
      "pid": 2,
      "name": "產品名稱",
      "price": 200,
      "discount": 100,
      "quantity": 1,
      "img": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      "selected": false
    }]
  },{
    "id": 3,
    "name": "ShopID",
    "date": "19:30",
    "product": [{
      "pid": 1,
      "name": "產品名稱",
      "price": 200,
      "discount": 100,
      "quantity": 1,
      "img": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      "selected": false
    },{
      "pid": 2,
      "name": "產品名稱",
      "price": 200,
      "discount": 100,
      "quantity": 1,
      "img": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      "selected": false
    }]
  }];
  discount = 20;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    const userSession = localStorage.getItem('user_session');
    if (userSession === undefined || userSession == null) {
      this.router.navigate(['/signin']);
    }
  }

  checkShop(id){
    for(let item of this.items){
      if(item.id === id){
        if(this.selectAllProducts(id)){
          for(let product of item.product){
            product.selected = false;
          }
        } else{
          for(let product of item.product){
            product.selected = true;
          }
        }
      }
    }
  }

  selectAllProducts(id){
    for(let item of this.items){
      if(item.id === id){
        for(let product of item.product){
          if(!product.selected){
            return false;
          }
        }
        return true;
      }
    }
  }
  checkProduct(id,pid){
    for(let item of this.items){
      if(item.id === id){
        for(let product of item.product){
          if(product.pid === pid){
            product.selected = !product.selected;
          }
        }
      }
    }
  }
  changeQuan(id, pid,sign){
    for(let item of this.items){
      if(item.id === id){
        for(let product of item.product){
          if(product.pid === pid){
            if(sign===0 && product.quantity>0){
              product.quantity--;
            } else if (sign===1) {
              product.quantity++;
            }
          }
        }
      }
    }
  }
  getTotalQuantity(){
    let total = 0;
    for(let item of this.items){
      for(let product of item.product){
        total+=product.quantity;
      }
    }
    return total;
  }
  getTotalPrice(){
    let total = 0;
    for(let item of this.items){
      for(let product of item.product){
        total+=(product.price-product.discount)*product.quantity;
      }
    }
    if(total === 0) {
      return total;
    }
    return total - this.discount;
  }

  deleteItem(){
    for(let i = 0; i < this.items.length; i++){
      //delete shopID with all products
      if(this.selectAllProducts(this.items[i].id)){
        this.items.splice(i, 1);
      } else {
        //not all products are selected => delete specific ones
        for(let j = 0; j < this.items[i].product.length; j++){
          if(this.items[i].product[j].selected) {
            this.items[i].product.splice(j,1);
          }
        }
      }
    }
  }
  moveToFavorite(){
    for(let item of this.items){
      for(let product of item.product){
        if(product.selected){
          //add to favorite db
        }
      }
    }
  }

  async moveToPage(){
    await this.router.navigate(['shopping-cart-payment'], {replaceUrl: true});
  }

  openHomepage(){
    this.router.navigate(['/homepage-new'])
  }

  openForum(){
    this.router.navigate(['./forum'])
  }

  openChatroom(){
    this.router.navigate(['/chatroom'])
  }

  openShoppingCart(){
    this.router.navigate(['/shopping-cart'])
  }

  openProfile(){
    this.router.navigate(['/profile'])
  }

}
