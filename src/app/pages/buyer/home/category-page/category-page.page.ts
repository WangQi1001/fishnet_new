import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/appSettings';
import { ProductCategoryFilterPage } from 'src/app/modals/product-category-filter/product-category-filter.page';
import { ProductCategorySortPage } from 'src/app/modals/product-category-sort/product-category-sort.page';
@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.page.html',
  styleUrls: ['./category-page.page.scss'],
})
export class CategoryPagePage implements OnInit {
  // @Input() category: String;
  modalDataResponse: any;
  private api_url = AppSettings.API_ENDPOINT + "product-info/products-in-category/";
  private api_result = [];
  private parent_url;
  private category;
  private category_chinese;
  constructor(
    private router: Router,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private http: HttpClient
  ) {
    this.category = this.router.getCurrentNavigation().extras.state.category;
   }

  ngOnInit() {
    this.getProducts();
    this.parent_url = this.router.url;
    // console.log(this.category);
    // this.api_url+=this.category;
    if (this.category==="bird"){
      this.category_chinese="鳥類";
    } else if(this.category==="fish"){
      this.category_chinese="魚類";
    } else if (this.category==="flower"){
      this.category_chinese="花類";
    } else if (this.category==="insect"){
      this.category_chinese="蟲類";
    }
  }
  goBack(){
    this.router.navigate(['/homepage-new'])
  }

  async presentSortModal(){
    const modal = await this.modalController.create({
      component: ProductCategorySortPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }

  async presentFilterModal(){
    const modal = await this.modalController.create({
      component: ProductCategoryFilterPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();   
  }

  getProducts(){
    console.log(this.category);
    this.http.get(this.api_url+this.category).subscribe(
      // consoel.log(this.category)
      data => {
        console.log(data)
        for (var i of data["data"]){
          let media = JSON.parse(i.media.replace(/'/g, '"'));
          i.media = media;
          this.api_result.push(i);
        }
      },
      error => console.log(error)
    )
  }

}
