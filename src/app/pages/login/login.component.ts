import { Component, OnDestroy, Self, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import LoginService from './services/login.service';
import { LocalStorageService } from './services/local-storage.service';
import { FormHelper } from './helpers/build-form';
import { AuthParamsModel, ResponseAuthParamsModel } from './models';
import { MatFormFieldComponent } from '../../shared/components/input-form/mat-form-field.component';
import { WnButtonComponent } from 'src/app/shared/components/wn-button/wn-button.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldComponent,
    MatProgressSpinnerModule,
    WnButtonComponent,
  ],
  providers: [LoginService, LocalStorageService],
  standalone: true,
})
export class LoginComponent extends FormHelper implements OnDestroy {
  private destroy$ = new Subject();
  protected loading: boolean;

  constructor(
    @Self() private _loginService: LoginService,
    @Self() private _localStorageService: LocalStorageService,
    @SkipSelf() private _router: Router
  ) {
    super();
  }

  public authentication(): void {
    this.loading = true;
    this._loginService
      .auth(this.form.value as AuthParamsModel)
      .pipe(takeUntil(this.destroy$))
      .subscribe((tokenUser: ResponseAuthParamsModel) => {
        this.loading = false;
        this._localStorageService.setItem(tokenUser);
        this._router.navigate(['home']);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
