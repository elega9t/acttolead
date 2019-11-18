import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineMarketingComponent } from './online-marketing.component';

describe('OnlineMarketingComponent', () => {
  let component: OnlineMarketingComponent;
  let fixture: ComponentFixture<OnlineMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
