import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductVisitRateFilterPage } from './product-visit-rate-filter.page';

describe('ProductVisitRateFilterPage', () => {
  let component: ProductVisitRateFilterPage;
  let fixture: ComponentFixture<ProductVisitRateFilterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductVisitRateFilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductVisitRateFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});