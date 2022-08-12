import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-coupon-add',
  templateUrl: './coupon-add.page.html',
  styleUrls: ['./coupon-add.page.scss'],
})
export class CouponAddPage implements OnInit {
  isNext = false;
  couponType = 0;
  couponCondition = 0;
  type: any;
  label1Added: boolean = false;
  label2Added: boolean = false;
  label3Added: boolean = false;
  label4Added: boolean = false;
  label5Added: boolean = false;
  selectedId:number=0;

  constructor(
    private modalController: ModalController,
  ) {}

  ngOnInit() {
  }

  async clickNext() {
    this.isNext = true;
  }

  async changeCouponType(e) {
    this.couponType = e.target.value;
  }

  async changeCouponCondition(e) {
    this.couponCondition = e.target.value;
  }

  async selectType(r) {
    this.type = r;
  }

  addLabel1(){   
    if (this.label1Added === true) {
      this.label1Added = false;
    } else {
      this.label1Added = true;
    }
  }

  addLabel2(){   
    if (this.label2Added === true) {
      this.label2Added = false;
    } else {
      this.label2Added = true;
    }
  }

  addLabel3(){    
    if (this.label3Added === true) {
      this.label3Added = false;
    } else {
      this.label3Added = true;
    }
  }

  addLabel4(){   
    if (this.label4Added === true) {
      this.label4Added = false;
    } else {
      this.label4Added = true;
    }
  }

  addLabel5(){   
    if (this.label5Added === true) {
      this.label5Added = false;
    } else {
      this.label5Added = true;
    }
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalController.dismiss(closeModal);
  }
}
