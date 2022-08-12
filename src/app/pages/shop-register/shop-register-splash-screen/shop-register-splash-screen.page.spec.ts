import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopRegisterSplashScreenPage } from './shop-register-splash-screen.page';

describe('ShopRegisterSplashScreenPage', () => {
  let component: ShopRegisterSplashScreenPage;
  let fixture: ComponentFixture<ShopRegisterSplashScreenPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopRegisterSplashScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopRegisterSplashScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
