import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-coupon',
  templateUrl: './profile-coupon.page.html',
  styleUrls: ['./profile-coupon.page.scss'],
})
export class ProfileCouponPage implements OnInit {
  constructor(
      private router: Router,
  ) { }

  ngOnInit() {
  }

  async goBack() {
    await this.router.navigate(['/profile'], {replaceUrl: true});
  }
}