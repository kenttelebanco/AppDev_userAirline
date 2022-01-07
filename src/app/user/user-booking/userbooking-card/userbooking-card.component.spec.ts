import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbookingCardComponent } from './userbooking-card.component';

describe('UserbookingCardComponent', () => {
  let component: UserbookingCardComponent;
  let fixture: ComponentFixture<UserbookingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbookingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbookingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
