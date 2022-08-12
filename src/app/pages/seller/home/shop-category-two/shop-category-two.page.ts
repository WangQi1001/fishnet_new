import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ProductCategorySortPage } from 'src/app/modals/product-category-sort/product-category-sort.page';
import { ProductCategoryFilterPage } from 'src/app/modals/product-category-filter/product-category-filter.page';


@Component({
  selector: 'app-shop-category-two',
  templateUrl: './shop-category-two.page.html',
  styleUrls: ['./shop-category-two.page.scss'],
})
export class ShopCategoryTwoPage implements OnInit {
  modalDataResponse: any;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,  
    ) { }

  ngOnInit() {
  }

  async openProductEdit(){
    await this.router.navigate(['seller/product'])
  }

  goBack(){
    this.router.navigate(['seller/homepage'])
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

}
