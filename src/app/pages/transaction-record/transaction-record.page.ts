import { Component, OnInit } from '@angular/core';
import {IonRouterOutlet, LoadingController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import { TransactionRecordFilterPage } from 'src/app/modals/transaction-record-filter/transaction-record-filter.page';

@Component({
  selector: 'app-transaction-record',
  templateUrl: './transaction-record.page.html',
  styleUrls: ['./transaction-record.page.scss'],
})
export class TransactionRecordPage implements OnInit {
  //searchTerm: string;
  searchInput: string;
  modalDataResponse: any;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet, 
  ) { 

  }

  ngOnInit() {
  }

  async goBack() {
    await this.router.navigate(['/seller/profile'], {replaceUrl: true});
  }
  searchInputted(event){
    // if(this.searchInput!==''){
    //   this.messages = this.messages2.filter(x=> x.id.toLowerCase().includes(this.searchInput.toLowerCase()));
    // } else{
    //   this.messages = this.messages2;
    // }
  }

  async presentFilterModal(){
    const modal = await this.modalController.create({
      component: TransactionRecordFilterPage,
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
