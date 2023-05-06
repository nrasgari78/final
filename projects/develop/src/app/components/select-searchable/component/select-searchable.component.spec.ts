import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSearchableComponent } from './select-searchable.component';

describe('SelectSearchableComponent', () => {
  let component: SelectSearchableComponent;
  let fixture: ComponentFixture<SelectSearchableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSearchableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSearchableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
