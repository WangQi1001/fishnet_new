import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.page.html',
  styleUrls: ['./my-order.page.scss'],
})
export class MyOrderPage implements OnInit {
  //searchTerm: string;
  searchInput: string;

  constructor(
      private router: Router,
      private location: Location,
      private alertController: AlertController,
      private loadingController: LoadingController,
      private modalController: ModalController,
  ) { 

  }

  ngOnInit() {
  }

  async goBack() {
    await this.router.navigate(['/profile'], {replaceUrl: true});
  }
  searchInputted(event){
    // if(this.searchInput!==''){
    //   this.messages = this.messages2.filter(x=> x.id.toLowerCase().includes(this.searchInput.toLowerCase()));
    // } else{
    //   this.messages = this.messages2;
    // }
  }

}
