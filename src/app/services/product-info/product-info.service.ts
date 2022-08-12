import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  productInfo = {};
  
  constructor() {}

  setProductInfo(data){
    this.productInfo = data;
    // console.log(data);
    // console.log(data)
  }

  getProductInfo(){
    return this.productInfo;
  }}
