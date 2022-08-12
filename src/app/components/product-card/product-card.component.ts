import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ProductInfoService } from 'src/app/services/product-info/product-info.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product_info = {};
  @Input() parent_url;

  private discounted_price;
  private image_url;
  constructor(
    private router: Router,
    private productInfoService: ProductInfoService
  ) { }

  ngOnInit() {
    // console.log(this.product_info);
    this.discounted_price = Math.round( ((100- this.product_info["discount"]) * 0.01 * this.product_info["price"]) * 10 ) /10 ;
    this.image_url = `url(${this.product_info["media"][0]})` ;
  }

  async openProductPage(){
    this.productInfoService.setProductInfo(this.product_info);
    await this.router.navigate(['/product'], { state: { parent_url: this.parent_url } })
  }

}

