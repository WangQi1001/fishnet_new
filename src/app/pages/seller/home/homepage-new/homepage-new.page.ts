import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-homepage-new',
  templateUrl: './homepage-new.page.html',
  styleUrls: ['./homepage-new.page.scss'],
})
export class HomepageNewPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  async enterStoreIntroduction() {
    await this.router.navigate(['/seller/store-introduction'], {replaceUrl: true});
  }

  async enterShipping() {
    await this.router.navigate(['/seller/shipping'], {replaceUrl: true});
  }

  async enterTerms() {
    await this.router.navigate(['/seller/terms'], {replaceUrl: true});
  }

  async openNotification(){
    await this.router.navigate(['/notifications'], {replaceUrl: true});
  }

}
