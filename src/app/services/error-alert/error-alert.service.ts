import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ErrorAlertService {

  constructor(
    private alertController: AlertController
  ) { }

  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      // subHeader: 'Important message',
      message: 'Server Failure, Try Again!',
      buttons: ['OK']
    });

    await alert.present();
  }
}
