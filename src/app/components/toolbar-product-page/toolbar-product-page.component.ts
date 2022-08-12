import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInfoService } from 'src/app/services/product-info/product-info.service';
import { StorageService } from 'src/app/services/storage-service/storage.service';
import { AppSettings } from 'src/appSettings';

@Component({
  selector: 'app-toolbar-product-page',
  templateUrl: './toolbar-product-page.component.html',
  styleUrls: ['./toolbar-product-page.component.scss'],
})
export class ToolbarProductPageComponent implements OnInit {
  private API_ENDPOINT=AppSettings.API_ENDPOINT;
  constructor(
    private router: Router,
    private http: HttpClient,
    private product_info_service: ProductInfoService,
    private session_storage: StorageService
  ) { }

  ngOnInit() {}


  async openHomePage(){
    await this.router.navigate(['/seller/homepage'])
  }

  saveProduct(){
    var product_id=this.product_info_service.getProductInfo()["id"];
    // this.http.get({url:})
    let headers = new HttpHeaders();
    headers.append("Content Type", 'multipart/form-data');
    headers.append("Accept", 'application/json');
    this.session_storage.get("session_id").then((session_id)=>{
      this.http.post(this.API_ENDPOINT+"product-info/save-product/", JSON.stringify({"id": product_id, "session_id": session_id}), {headers: headers}).subscribe(
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

