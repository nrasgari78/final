import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaminUser } from './tamin-user';

describe('TaminUser', () => {
  let component: TaminUser;
  let fixture: ComponentFixture<TaminUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaminUser ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaminUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
