import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-store-introduction',
  templateUrl: './store-introduction.page.html',
  styleUrls: ['./store-introduction.page.scss'],
})
export class StoreIntroductionPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  async goBack(){
    await this.router.navigate(['ipygg/shop-homepage'])
  }
}
