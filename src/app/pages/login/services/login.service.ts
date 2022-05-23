import { Injectable } from '@angular/core';
import { AuthParamsModel } from '../models/auth-params.model';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT } from 'src/app/shared/helpers/router.helper';
import { ResponseAuthParamsModel } from '../models';
import { Observable } from 'rxjs';
@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  auth(authParams: AuthParamsModel): Observable<ResponseAuthParamsModel> {
    return this.http.post<ResponseAuthParamsModel>(ENDPOINT.auth, { authParams });
  }
}
