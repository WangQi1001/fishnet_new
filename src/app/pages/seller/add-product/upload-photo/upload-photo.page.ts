import { Component, OnInit, NgModule } from '@angular/core';
import {Router} from '@angular/router'
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UploadPhotoFilterPage} from '../../../../modals/upload-photo-filter/upload-photo-filter.page';
import {UploadVideoFilterPage} from '../../../../modals/upload-video-filter/upload-video-filter.page';
import {IonRouterOutlet, ModalController} from '@ionic/angular';

//import { DragulaModule} from 'ng2-dragula';
//import { DragulaService } from 'ng2-dragula/ng2-dragula';
//import {DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.page.html',
  styleUrls: ['./upload-photo.page.scss'],
})


export class UploadPhotoPage implements OnInit {

  private formData: FormGroup;
  private pageNumber = 1;

  moreDetail: boolean = false;
  modalDataResponse: any;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
  ) { }

  ngOnInit() {
    this.formData = new FormGroup({
      
    })
  }

  onSubmit(){
    // Save data to DB
    // TODO: Account Check Validation
    console.log(this.formData.value)
  }

  openLessDetail(){
    this.moreDetail = false;
  }

  openMoreDetail(){
    this.moreDetail = true;
  }

  previousPage(){
    if (this.pageNumber === 1){
      this.router.navigate(['/product-description']);
    } 
    else{
      this.pageNumber--;
    }
    // console.log(this.pageNumber)  
  }

  //nextPage(){
  //  this.pageNumber++
  //}

  nextPage(){
    this.router.navigate(['/add-product-delivery'])
  }

  fileName: string;
  private file:File;
  loadImageFromDevice(event) {
    this.file = event.target.files[0];
    if (this.file) {
        this.fileName = this.file.name;
        // console.log(this.file);
    }
}

async presentUploadPhotoFilterModal(){
  const modal = await this.modalController.create({
    component: UploadPhotoFilterPage,
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

async presentUploadVideoFilterModal(){
  const modal = await this.modalController.create({
    component: UploadVideoFilterPage,
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

}
