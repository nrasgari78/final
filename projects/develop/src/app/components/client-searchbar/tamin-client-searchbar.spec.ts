import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaminClientSearchbar } from './tamin-client-searchbar';

describe('TaminClientSearchbarComponent', () => {
  let component: TaminClientSearchbar;
  let fixture: ComponentFixture<TaminClientSearchbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaminClientSearchbar ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaminClientSearchbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
