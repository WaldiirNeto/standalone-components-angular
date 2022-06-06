import { Component, OnDestroy, Self, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { Subject, takeUntil } from 'rxjs';
import { LocalStorageService } from './services/local-storage.service';
import { Router } from '@angular/router';
import { FormHelper } from './build-form';
import { AuthParamsModel, ResponseAuthParamsModel } from './models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule, MatInputModule],
  providers: [LoginService, LocalStorageService],
  standalone: true,
})
export class LoginComponent extends FormHelper implements OnDestroy {
  private destroy$ = new Subject();

  constructor(
    @Self() private loginService: LoginService,
    @Self() private LocalStorageService: LocalStorageService,
    @SkipSelf() private Router: Router
  ) {
    super();
  }
  public authentication(): void {
    this.loginService
      .auth(this.form.value as AuthParamsModel)
      .pipe(takeUntil(this.destroy$))
      .subscribe((tokenUser: ResponseAuthParamsModel) => {
        this.LocalStorageService.setItem(tokenUser);
        this.Router.navigate(['home']);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
