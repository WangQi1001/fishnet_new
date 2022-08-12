import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class LoaderServiceService {

  constructor(
    public loadingCtrl: LoadingController
  ) { }

  // Loader and Spinner
  async basicLoader() {
    const loading = await this.loadingCtrl.create({
        spinner: 'crescent',
        message: 'Please wait...',
        // duration: 3000,
        backdropDismiss: false,
        translucent: true,
        // cssClass:'ion-loading-class'
    })
    return loading.present()
  }

  closeLoader() {
    this.loadingCtrl.dismiss().then((res) => {
        // console.log('Loader hidden', res);
    }).catch((error) => {
        console.log(error);
    });
  }
}
