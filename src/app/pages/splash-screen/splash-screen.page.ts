import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage-service/storage.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    setTimeout(()=>{
      this.storageService.get("session_id").then(
        data=>{
          // console.log("bug");
          this.router.navigate(['/homepage-new']);
        },
        err=>{
          // console.log("bug");
          this.router.navigate(['/signin'])
        }
      );
    }, 1000)
  }

  openSignInPage(){
    this.storageService.get("session_id").then(
      data=>{
        // console.log("bug");
        this.router.navigate(['/homepage-new']);
      },
      err=>{
        // console.log("bug");
        this.router.navigate(['/signin'])
      }
    )

  }

}
