import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResponseAuthParamsModel } from '../models';

@Injectable()
export class LocalStorageService {

  private key = 'tokenStandaloneComponents'
  setItem(params: ResponseAuthParamsModel): void {
    window.localStorage.setItem(this.key, JSON.stringify(params))
  }

  getItem(): Observable<ResponseAuthParamsModel> {
    const token: ResponseAuthParamsModel = JSON.parse(window.localStorage.getItem(this.key) as string)
    return of(token);
  }
}
