import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { API_URL } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private readonly http: HttpClient) { }

  register(body: { 
    email: string; 
    password: string;
    fname: string;
    lname: string;
  }) {
    this.http
      .post(`${API_URL}/register`, body, { headers: { Authorization: 'Bearer <jwt>' } })
      .toPromise()
      .then(jwt => {
        console.log('jwt', jwt)
      });
  }

  logIn() {

  }
}
