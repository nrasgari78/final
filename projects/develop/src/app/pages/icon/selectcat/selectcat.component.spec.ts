import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcatComponent } from './selectcat.component';

describe('SelectcatComponent', () => {
  let component: SelectcatComponent;
  let fixture: ComponentFixture<SelectcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
