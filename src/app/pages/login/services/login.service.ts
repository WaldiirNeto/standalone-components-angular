import { Injectable } from '@angular/core';
import { AuthParamsModel } from '../models/auth-params.model';
import { HttpClient } from '@angular/common/http';
import { ResponseAuthParamsModel } from '../models';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../../../shared/helpers/router.helper';
@Injectable()
export default class LoginService {
  constructor(private http: HttpClient) {}

  auth(authParams: AuthParamsModel): Observable<ResponseAuthParamsModel> {
    return this.http.post<ResponseAuthParamsModel>(ENDPOINT.auth, {
      authParams,
    });
  }
}
