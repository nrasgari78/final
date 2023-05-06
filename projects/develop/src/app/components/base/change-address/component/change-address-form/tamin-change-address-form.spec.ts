import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaminChangeAddressForm } from './tamin-change-address-form';

describe('TaminChangeAddressForm', () => {
  let component: TaminChangeAddressForm;
  let fixture: ComponentFixture<TaminChangeAddressForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaminChangeAddressForm ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaminChangeAddressForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
