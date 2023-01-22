import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalAndPayComponent } from './final-and-pay.component';

describe('FinalAndPayComponent', () => {
  let component: FinalAndPayComponent;
  let fixture: ComponentFixture<FinalAndPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalAndPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalAndPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
