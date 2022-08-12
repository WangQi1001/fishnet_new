import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-payment',
  templateUrl: './profile-favorite.page.html',
  styleUrls: ['./profile-favorite.page.scss'],
})
export class ProfileFavoritePage implements OnInit {
  constructor(
      private router: Router,
  ) { }

  ngOnInit() {
  }

  async goBack() {
    await this.router.navigate(['/profile'], {replaceUrl: true});
  }
}
