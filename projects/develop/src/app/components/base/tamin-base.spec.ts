import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaminBase } from './tamin-base';

describe('MenuComponent', () => {
  let component: TaminBase;
  let fixture: ComponentFixture<TaminBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaminBase ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaminBase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
