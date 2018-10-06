import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserBackendService {

  constructor() { }

  // getUserLogin(): Observable<User> {
  //   const mockData = {
  //     name: "Tyler",
  //     password: "123"
  //   }
  //   return of(mockData)
  // }

  checkUserLogin() {
    const mockData = {
      name: "Tyler",
      password: "123"
    }
    return mockData
    // return this.http.get('localhost:10111/')
  }
}
