import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notifications-news-detail',
  templateUrl: './notifications-news-detail.page.html',
  styleUrls: ['./notifications-news-detail.page.scss'],
})
export class NotificationsNewsDetailPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  previousPage(){
    this.router.navigate(['/notifications'])
  }
}
