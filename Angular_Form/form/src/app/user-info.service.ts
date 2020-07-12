import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { user } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor(private http: HttpClient) {}
  load() {
    return this.http
      .get<UserInfoService>('user-info.json')
      .toPromise()
      .then((data) => {});
  }
}
