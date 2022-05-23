import { Component, OnDestroy, OnInit, Self } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { Subject, takeUntil } from 'rxjs';
import { ResponseAuthParamsModel } from './models';
import { LocalStorageService } from './services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule],
  providers: [LoginService, LocalStorageService],
  standalone: true
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup
  private destroy$ = new Subject()

  constructor(
    private formBuilder: FormBuilder,
    private Router: Router,
    @Self() private loginService: LoginService,
    @Self() private LocalStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.loginForm = this.createForm()
  }

  public authentication(): void {
    this.loginService.auth(this.loginForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((tokenUser: ResponseAuthParamsModel) => {
        this.LocalStorageService.setItem(tokenUser);
        this.Router.navigate(['home'])
      })
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(null)
    this.destroy$.complete()
  }
}
