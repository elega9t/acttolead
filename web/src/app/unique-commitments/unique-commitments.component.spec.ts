import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueCommitmentsComponent } from './unique-commitments.component';

describe('UniqueCommitmentsComponent', () => {
  let component: UniqueCommitmentsComponent;
  let fixture: ComponentFixture<UniqueCommitmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueCommitmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueCommitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
