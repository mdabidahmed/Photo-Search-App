import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    Authorization: '563492ad6f91700001000001f9b463f667f042c4b6a0bd5f4b4fec91',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class PexelPhotoService {
  constructor(private http: HttpClient) {}
  getData(search, perPage): Observable<any> {
    console.log(search);
    console.log(perPage);

    const url =
      'https://api.pexels.com/v1/search?query=' +
      search +
      '&per_page=' +
      perPage;
    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }
  handleError(error) {
    return throwError(error.message || 'Server error');
  }
}
