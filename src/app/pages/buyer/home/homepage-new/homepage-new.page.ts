import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResultService } from '../../../../services/search-service/search-result.service';
import { AppSettings } from 'src/appSettings';
import { Platform } from '@ionic/angular';
// import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-homepage-new',
  templateUrl: './homepage-new.page.html',
  styleUrls: ['./homepage-new.page.scss'],
})
export class HomepageNewPage implements OnInit {

  private api_url = AppSettings.API_ENDPOINT + "product-info/search-product/";
  private api_url_allProduct = AppSettings.API_ENDPOINT + "product-info/all-products";
  private api_url_newestProduct = AppSettings.API_ENDPOINT + "product-info/newest-products"
  private api_search_url;
  private api_search_result = [];
  private api_all_product_result = [];
  private api_newest_product_result = [];
  private parent_url;


  constructor(
    private router: Router,
    private http: HttpClient,
    private searchResultService: SearchResultService,
    // private fcm: FCM, 
    // public plt: Platform
  ) { 
    // this.plt.ready()
    //   .then(() => {
    //     this.fcm.onNotification().subscribe(data => {
    //       if (data.wasTapped) {
    //         console.log("Received in background");
    //       } else {
    //         console.log("Received in foreground");
    //       };
    //     });

    //     this.fcm.onTokenRefresh().subscribe(token => {
    //       // Register your new token in your back-end if you want
    //       // backend.registerToken(token);
    //       console.log(token);
    //     });
    //   })
    // this.getToken()
  }
  // subscribeToTopic() {
  //   // this.fcm.subscribeToTopic('enappd');
  // }
  // getToken() {
  //   console.log("got token run");
  //   this.fcm.getToken().then(token => {
  //     // Register your new token in your back-end if you want
  //     // backend.registerToken(token);
  //     console.log(token);
  //   });
  // }
  // unsubscribeFromTopic() {
  //   this.fcm.unsubscribeFromTopic('enappd');
  // }

  ngOnInit() {
    // this.getAllProduct();
    this.getNewestProduct();
    this.parent_url = this.router.url;
  }

  async getAllProduct(){
    await this.http.get(this.api_url_allProduct).subscribe(
      data => {
        console.log(data);
        for (var i of data["data"]){
          let media = JSON.parse(i.media.replace(/'/g, '"'));
          i.media = media;
          this.api_all_product_result.push(i);
        }
      },
      error => console.log(error)
    )
  }

  async getNewestProduct(){
    await this.http.get(this.api_url_newestProduct).subscribe(
      data => {
        console.log(data);
        for (var i of data["data"]){
          let media = JSON.parse(i.media.replace(/'/g, '"'));
          i.media = media;
          this.api_newest_product_result.push(i);
        }
      },
      error => console.log(error)
    )
  }

  openNotification(){
    this.router.navigate(['/notifications']);
  }

  openCategory(category){
    this.router.navigate(['/category-page'], { state: { category: category } })
    console.log(category)
  }
}
