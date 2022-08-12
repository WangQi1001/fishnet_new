import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalController} from '@ionic/angular';
import { ImageCropperComponent, ImageTransform } from 'ngx-image-cropper';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-photo-filter',
  templateUrl: './upload-photo-filter.page.html',
  styleUrls: ['./upload-photo-filter.page.scss'],
})
export class UploadPhotoFilterPage implements OnInit {
  adjustment:number = 1;

  moreDetail: boolean = false;

  canvasRotation = 0;
  transform: ImageTransform = {};

  @ViewChild(ImageCropperComponent, { static: false}) angularCropper: ImageCropperComponent;

  constructor(
    private modalController: ModalController,

  ) {}

  ngOnInit() {
    this.captureImage();
  }

  openLessDetail(){
    this.moreDetail = false;
  }

  openMoreDetail(){
    this.moreDetail = true;
  }

  brightness() {
    this.adjustment = 1;
  }

  contrast() {
    this.adjustment = 2;
  }

  highlights() {
    this.adjustment = 3;
  }

  shadows() {
    this.adjustment = 4;
  }

  saturation() {
    this.adjustment = 5;
  }

  temperature() {
    this.adjustment = 6;
  }

  exposure() {
    this.adjustment = 7;
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalController.dismiss(closeModal);
  }

  myImage = null;

  captureImage() {
  this.convertFileToDataURLviaFileReader('../../../../assets/SELLER/add-product/upload-photo-filter-fish.png').subscribe(
    base64 => {
      this.myImage = base64;
    }
  )
  }

  rotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
}


  private flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
        ...this.transform,
        flipH: flippedV,
        flipV: flippedH
    };
}

  flipHorizontal() {
  this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH
  };
}

  flipVertical() {
  this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV
  };
}

  reset() {
    this.canvasRotation = 0;
    this.transform = {};
    
  }

  convertFileToDataURLviaFileReader(url: string) {
    return Observable.create(observer => {
      let xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.onload = function() {
        let reader: FileReader = new FileReader();
        reader.onloadend = function() {
          observer.next(reader.result);
          observer.complete();
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    })
  }
}