import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { user } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketServiceService {
  _url = 'http://localhost:3000/ticket';

  constructor(private _http: HttpClient) {}

  ticket(user: user) {
    return this._http
      .post<any>(this._url, user)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
