import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StaffAddPage} from '../../../modals/staff-add/staff-add.page';
import {IonRouterOutlet, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {
  modalDataResponse: any;

  staffs = [{
    "id": "帳戶名稱",
    "date": "30/03/2022",
    "selected": false
  },
  {
    "id": "Chantaiman1234",
    "date": "28/11/2021",
    "selected": false
  }];

  constructor(
    private router: Router,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
  ) { }

  ngOnInit() {
  }

  checkStaff(id){
    for(let staff of this.staffs){
      if(staff.id === id){
        staff.selected = !staff.selected;
      }
    }
  }

  deleteStaff(){
    for(let i = 0; i < this.staffs.length; i++){
      if(this.staffs[i].selected) {
        this.staffs.splice(i,1);
      }
    }
  }


 
  async presentStaffAddModal(){
    const modal = await this.modalController.create({
      component: StaffAddPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }

  async goBack() {
    await this.router.navigate(['seller/profile'], {replaceUrl: true});
  }
}