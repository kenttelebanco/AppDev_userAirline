import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSheduleComponent } from './user-shedule.component';

describe('UserSheduleComponent', () => {
  let component: UserSheduleComponent;
  let fixture: ComponentFixture<UserSheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
