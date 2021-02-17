import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Data } from '../models/Data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Data[]> {
    return this.http
      .get<Data[]>(this.url)
      .pipe(tap((_) => console.log('fetched data')));
  }
}
