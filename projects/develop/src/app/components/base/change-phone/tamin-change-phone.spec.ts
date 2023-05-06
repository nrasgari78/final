import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaminChangePhone } from './tamin-change-phone';

describe('TaminChangePhone', () => {
  let component: TaminChangePhone;
  let fixture: ComponentFixture<TaminChangePhone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaminChangePhone ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaminChangePhone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
