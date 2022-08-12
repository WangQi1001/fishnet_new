import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-payment',
  templateUrl: './profile-store.page.html',
  styleUrls: ['./profile-store.page.scss'],
})
export class ProfileStorePage implements OnInit {

  constructor(
      private router: Router,
  ) { }

  ngOnInit() {
  }

  async goBack() {
    await this.router.navigate(['/profile'], {replaceUrl: true});
  }
}
