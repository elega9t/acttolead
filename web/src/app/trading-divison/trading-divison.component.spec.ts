import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingDivisonComponent } from './trading-divison.component';

describe('TradingDivisonComponent', () => {
  let component: TradingDivisonComponent;
  let fixture: ComponentFixture<TradingDivisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingDivisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingDivisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
