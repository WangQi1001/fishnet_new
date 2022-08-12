import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {IonRouterOutlet, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  isProductDescription: boolean = true;
  isShippingMethod: boolean= false;
  isRelatedPost: boolean = false;

  constructor(
    private router: Router

  ) { }

  ngOnInit() {
  }

  async openStore(){
    await this.router.navigate(['/ipygg/shop-homepage'], {replaceUrl: true});
  }

  toggleProductDescription(){
    this.isProductDescription = true;
    this.isShippingMethod = false;
    this.isRelatedPost = false;
  }

  toggleShippingMethod(){
    this.isProductDescription = false;
    this.isShippingMethod = true;
    this.isRelatedPost = false;
  }

  toggleRelatedPost(){
    this.isProductDescription = false;
    this.isShippingMethod = false;
    this.isRelatedPost = true;
  }

  async goBack(){
    await this.router.navigate(['/seller/homepage'], {replaceUrl: true});
  }

  async openEdit(){
    await this.router.navigate(['/seller/item'], {queryParams: {type: 'edit'}, replaceUrl: true});
  }

  async openDuplicate(){
    await this.router.navigate(['/seller/item'], {queryParams: {type: 'duplicate'}, replaceUrl: true});
  }

  async goDelete(){
    await this.router.navigate(['/seller/item-delete'], {replaceUrl: true});
  }
}
