import { HttpClient } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { LoginComponent } from './login.component';
import { AuthParamsModel, ResponseAuthParamsModel } from './models';
import { LocalStorageService } from './services/local-storage.service';
import LoginService from './services/login.service';
jest.mock('./services/login.service');
jest.mock('./services/local-storage.service');
jest.mock('@angular/router');

export function findComponent<T>(
  fixture: ComponentFixture<T>,
  selector: string
): DebugElement {
  return fixture.debugElement.query(By.css(selector));
}
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginServiceMocked: LoginService;
  let localStorageServiceMocked: LocalStorageService;
  let RouterMocked: Router;

  const responseAuth: ResponseAuthParamsModel = {
    authorization: `mockJWT`,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [LoginService, LocalStorageService, Router],
      imports: [LoginComponent, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // LoginService.mockClear()
    // loginServiceMocked = TestBed.inject(
    //   LoginService
    // ) as jest.Mocked<LoginService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Init Component', () => {
    it('Should init child component', () => {
      fixture.detectChanges();

      const inputChildComponent = findComponent(fixture, 'input-form');
      expect(inputChildComponent).toBeTruthy();
    });

    it('Should init form with values empty', () => {
      fixture.detectChanges();

      expect(component['form'].controls.username.invalid).toBeTruthy();
      expect(component['form'].controls.password.invalid).toBeTruthy();
    });
  });

  // describe('state form', () => {
  it('should disabled form if form not valid', () => {
    fixture.detectChanges();
    const button =
      fixture.debugElement.nativeElement.querySelector('button').disabled;
    expect(button).toBeTruthy();
  });

  it('should enabled button if form is valid', () => {
    fixture.detectChanges();

    component['form'].controls.username.setValue('email@email.com');
    component['form'].controls.password.setValue('123');
    fixture.detectChanges();

    const button =
      fixture.debugElement.nativeElement.querySelector('button').disabled;
    expect(button).toBeFalsy();
  });

  // it('should submit request auth if form is valid', fakeAsync(() => {
  //   // localStorageServiceMocked = TestBed.inject(
  //   //   LocalStorageService
  //   // ) as jest.Mocked<LocalStorageService>;
  //   // RouterMocked = TestBed.inject(Router) as jest.Mocked<Router>;
  //   // loginServiceMocked.auth.mockReturnValue(of(responseAuth));
  //   // RouterMocked.navigate.mockReturnValue(Promise.resolve(true));
  //   component['form'].controls.username.setValue('email@email.com');
  //   component['form'].controls.password.setValue('123');
  //   fixture.detectChanges();

  //   const button = fixture.debugElement.nativeElement.querySelector('button');
  //   button.click();
  //   tick();
  //   // expect(loginServiceMocked.auth).toHaveBeenCalledWith(
  //   //   component['form'].value as AuthParamsModel
  //   // );
  //   // expect(loginServiceMocked.auth).toHaveBeenCalledTimes(1);
  //   // tick();
  // }));
});
// });
