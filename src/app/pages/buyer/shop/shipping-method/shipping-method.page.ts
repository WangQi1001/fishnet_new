import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-method',
  templateUrl: './shipping-method.page.html',
  styleUrls: ['./shipping-method.page.scss'],
})
export class ShippingMethodPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  async goBack(){
    await this.router.navigate(['ipygg/shop-homepage'])
  }
}
