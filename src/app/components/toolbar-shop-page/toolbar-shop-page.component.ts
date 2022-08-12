import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from 'src/appSettings';
import { StorageService } from 'src/app/services/storage-service/storage.service';

@Component({
  selector: 'app-toolbar-shop-page',
  templateUrl: './toolbar-shop-page.component.html',
  styleUrls: ['./toolbar-shop-page.component.scss'],
})
export class ToolbarShopPageComponent implements OnInit {
  @Input() merchant_id;
  private API_ENDPOINT=AppSettings.API_ENDPOINT;
  constructor(
    private router: Router,
    private session_storage: StorageService,
    private http: HttpClient
  ) { }

  ngOnInit() {}

  async openHomePage(){
    await this.router.navigate(['/ipygg/shop-homepage'])
  }

  async openShopCategory(){
    await this.router.navigate(['/ipygg/shop-category'])
  }

  async openShopCategory2(){
    await this.router.navigate(['/ipygg/shop-category-two'])
  }

  followStore(){
    // this.http.get({url:})
    let headers = new HttpHeaders();
    headers.append("Content Type", 'multipart/form-data');
    headers.append("Accept", 'application/json');
    this.session_storage.get("session_id").then((session_id)=>{
      this.http.post(this.API_ENDPOINT+"merchant-info/follow-merchant/", JSON.stringify({"merchant_id": this.merchant_id, "session_id": session_id}), {headers: headers}).subscribe(
        data=>{
          console.log(data);
        },
        error=>{
          console.log(error);
        }
      );
    })
  }

}
