import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnmeldenUndRegistrierenPage } from './anmelden-und-registrieren.page';

describe('AnmeldenUndRegistrierenPage', () => {
  let component: AnmeldenUndRegistrierenPage;
  let fixture: ComponentFixture<AnmeldenUndRegistrierenPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnmeldenUndRegistrierenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnmeldenUndRegistrierenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
