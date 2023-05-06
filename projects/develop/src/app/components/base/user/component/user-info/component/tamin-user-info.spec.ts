import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaminUserInfo } from './tamin-user-info';

describe('TaminUserInfo', () => {
  let component: TaminUserInfo;
  let fixture: ComponentFixture<TaminUserInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaminUserInfo ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaminUserInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
