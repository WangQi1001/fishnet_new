import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.page.html',
  styleUrls: ['./terms-condition.page.scss'],
})
export class TermsConditionPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  async goBack(){
    await this.router.navigate(['ipygg/shop-homepage'])
  }

}
