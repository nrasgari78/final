import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPage } from './modal-page.component';

describe('ModalPageComponent', () => {
  let component: ModalPage;
  let fixture: ComponentFixture<ModalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
