import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaminChangePassword } from './tamin-change-password';

describe('TaminChangePassword', () => {
  let component: TaminChangePassword;
  let fixture: ComponentFixture<TaminChangePassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaminChangePassword ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaminChangePassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
