import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaminChangeAddress } from './tamin-change-address';

describe('TaminChangeAddress', () => {
  let component: TaminChangeAddress;
  let fixture: ComponentFixture<TaminChangeAddress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaminChangeAddress ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaminChangeAddress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
