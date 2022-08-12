import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-shop-register-splash-screen',
  templateUrl: './shop-register-splash-screen.page.html',
  styleUrls: ['./shop-register-splash-screen.page.scss'],
})
export class ShopRegisterSplashScreenPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  nextPage(){
    this.router.navigate(['/seller/homepage'])
  }

}
