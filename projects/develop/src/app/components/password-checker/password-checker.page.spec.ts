import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaminPasswordCheckerPage } from './password-checker.page';

describe('TaminPasswordCheckerPage', () => {
  let component: TaminPasswordCheckerPage;
  let fixture: ComponentFixture<TaminPasswordCheckerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaminPasswordCheckerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaminPasswordCheckerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
