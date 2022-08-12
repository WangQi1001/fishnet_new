import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ProductCategorySortPage } from 'src/app/modals/product-category-sort/product-category-sort.page';
import { ProductCategoryFilterPage } from 'src/app/modals/product-category-filter/product-category-filter.page';

@Component({
  selector: 'app-shop-category-insect',
  templateUrl: './shop-category-insect.page.html',
  styleUrls: ['./shop-category-insect.page.scss'],
})
export class ShopCategoryInsectPage implements OnInit {

  modalDataResponse: any;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,  
    ) { }

  ngOnInit() {
  }

  async goBack(){
    await this.router.navigate(['ipygg/shop-category'], {replaceUrl:true})
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
