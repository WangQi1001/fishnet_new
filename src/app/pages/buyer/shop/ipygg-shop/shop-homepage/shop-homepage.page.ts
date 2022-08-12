import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage-service/storage.service';
import { AppSettings } from 'src/appSettings';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-shop-homepage',
  templateUrl: './shop-homepage.page.html',
  styleUrls: ['./shop-homepage.page.scss'],
})
export class ShopHomepagePage implements OnInit {
  private merchant_id;
  private previous_url;
  private api_endpoint=AppSettings.API_ENDPOINT;
  private merchant_products;
  private url;
  constructor(
    private router: Router,
    private http: HttpClient,
    private storage_service: StorageService
  ) { }

  ngOnInit() {
    this.merchant_id=this.router.getCurrentNavigation().extras.state.merchant_id;
    this.previous_url=this.router.getCurrentNavigation().extras.state.previous_url;
    this.url=this.router.url;
    this.getMerchantProducts();
  }

  followStore(){
    const session_id=this.storage_service.get("session_id");
    let headers = new HttpHeaders();
    headers.append("Content Type", "application/json");
    headers.append("Accept", "application/json");
    this.http.post(this.api_endpoint+"merchant-info/follow-merchant/", JSON.stringify({session_id: session_id, merchant_id: this.merchant_id}), {headers: headers}).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );


  }

  getMerchantProducts(){
    this.http.get(this.api_endpoint+"product-info/merchant-products/"+ this.merchant_id).subscribe(
      data=>{
        console.log(data);
        this.merchant_products=data["data"];
      },
      error=>{
        console.log(error);
      }
    )
  }

  async enterStoreIntroduction(){
    await this.router.navigate(['shop/store-introduction'], {replaceUrl: true})
  }

  async enterShipping(){
    await this.router.navigate(['shop/shipping-method'], {replaceUrl: true})
  }

  async enterTerms(){
    await this.router.navigate(['shop/terms-condition'], {replaceUrl: true})
  }

  async goBack(){
    await this.router.navigate(['homepage-new'], {replaceUrl: true})
  }

}
