import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationService } from 'src/app/services/navigation-service/navigation.service';
import { ProductInfoService } from 'src/app/services/product-info/product-info.service';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AppSettings } from 'src/appSettings';
import { StorageService } from 'src/app/services/storage-service/storage.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  isProductDescription: boolean = true;
  isShippingMethod: boolean= false;
  isRelatedPost: boolean = false;
  private product_info = {};
  private discounted_price;
  private product_image_url;
  private parent_url;
  private api_endpoint=AppSettings.API_ENDPOINT;
  private shop_info={};
  constructor(
    private router: Router,
    private productInfoService: ProductInfoService,
    private location: Location,
    private navigation: NavigationService,
    private navCtrl: NavController,
    private http: HttpClient,
    private storage_service: StorageService
  ) {
    this.product_info = this.productInfoService.getProductInfo()
   }

  ngOnInit() { 
    this.discounted_price =  Math.round(((100- this.product_info["discount"]) * 0.01 * this.product_info["price"]) * 10)/ 10;
    this.product_image_url = this.product_info["media"][0];
    this.parent_url = this.router.getCurrentNavigation().extras.state.parent_url;
    this.loadShopDiv();
    // console.log(this.product_info);
  }

  async goBack(){
    await this.router.navigate([this.parent_url]);
  }

  async openStore(){
    this.router.navigate(['/ipygg/shop-homepage'], {state:{previous_url: this.router.url, merchant_id: this.shop_info["id"]}});
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

  loadShopDiv(){
    console.log(this.product_info);
    var merchant_id=this.product_info["merchant_id"];
    this.http.get(this.api_endpoint+"merchant-info/single-merchant/"+merchant_id.toString()).subscribe(
      data=>{
        console.log(data);
        this.shop_info=data["data"];
      },
      error=>{
        console.log(error);
      }
    )

  }

}
