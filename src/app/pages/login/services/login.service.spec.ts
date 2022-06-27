import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
jest.mock('@angular/common/http');

describe('LoginServiceService', () => {
  let service: LoginService;
  let http: jest.Mocked<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService, HttpClient],
    });
    http = TestBed.inject(HttpClient) as jest.Mocked<HttpClient>;
    service = TestBed.inject(LoginService) as jest.Mocked<LoginService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
