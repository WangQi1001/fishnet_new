import {Component, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {Platform} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';
import { App } from '@capacitor/app';

// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { FCM } from '@ionic-native/fcm/ngx';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  lockedState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  private initPlugin: boolean;
  constructor(
    private platform: Platform,
    private router: Router,
    private zone: NgZone,
    private http: HttpClient

    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar,
    // private fcm: FCM

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log("Hello the platform is ready");
      FCM.getToken().then(token => {
        // console.log(token);
      }, error => { console.log(error) });
      FCM.onNotification().subscribe(data => {
        // console.log(data);
      });      
      // // refresh the FCM token
      FCM.onTokenRefresh().subscribe(token => {
        // console.log(token);
      });
      // unsubscribe from a topic
      // this.fcm.unsubscribeFromTopic('offers');
    });
  }
}


// fAvD8glFSk-vg7FqTIdVSD:APA91bFu7bVsPdEev4MmEDDjb3ZN2OJpFOgf4j3RRXUEfzphvqO17IgxIPOHvABnEilFE33Hpii8ZiZkdv6sSLqQeDL9QuFp5L5zlv_Om13NHILZXIuKAO9lA939j1VW4tjUUA0Y7PA6