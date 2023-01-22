import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignLoanComponent } from './sign-loan.component';

describe('SignLoanComponent', () => {
  let component: SignLoanComponent;
  let fixture: ComponentFixture<SignLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignLoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
