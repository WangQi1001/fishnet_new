import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-item-delete',
  templateUrl: './item-delete.page.html',
  styleUrls: ['./item-delete.page.scss'],
})
export class ItemDeletePage implements OnInit {
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  cancelClick(){
    this.router.navigate(['/seller/product']);
  }

  okClick(){
    this.router.navigate(['/seller/homepage']);
  }

}
