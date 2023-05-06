import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaminProgressBarComponent } from './tamin-progress-bar.component';

describe('TaminProgressBarComponent', () => {
  let component: TaminProgressBarComponent;
  let fixture: ComponentFixture<TaminProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaminProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaminProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
