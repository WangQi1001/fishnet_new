import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicStorageModule } from '@ionic/storage-angular';
import { FCM } from '@ionic-native/fcm/ngx';
// import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    IonicStorageModule.forRoot()],
  providers: [ 
    // FCM,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

// "ANDROID_DEFAULT_NOTIFICATION_ICON": "@mipmap/ic_launcher",
// "ANDROID_FCM_VERSION": "21.0.0",
// "ANDROID_FIREBASE_BOM_VERSION": "26.0.0",
// "ANDROID_GOOGLE_SERVICES_VERSION": "4.3.4",