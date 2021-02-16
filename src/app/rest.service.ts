import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  jwtKey: string = 'user_jwt'

  constructor(private readonly http: HttpClient) { }

  register(body: {
    email: string; 
    password: string;
    fname: string;
    lname: string;
  }) {
    this.http
      .post(`${API_URL}/register`, body)
      .toPromise()
      .then((res: string) => {
        console.log('jwt', res)
        localStorage.setItem(this.jwtKey, res)
      });
  }

  logIn(body) {
    this.http
      .post(`${API_URL}/auth`, body)
      .toPromise()
      .then(res => {
        localStorage.setItem(this.jwtKey, <string>res)
        console.log('jwt', res)
      });
  }

  logOut() {
    localStorage.removeItem(this.jwtKey);
  }

  getCar(id: number): Promise<any> {
    const jwt = localStorage.getItem(this.jwtKey);

    return this.http
      .get(
        `${API_URL}/${id}`,
        { headers: { Authorization: `Bearer ${jwt}` } }
      )
      .toPromise();
  }

  getUserCars(): Promise<any> {
    const jwt = localStorage.getItem(this.jwtKey);

    return this.http
      .get(
        `${API_URL}/user-cars`,
        { headers: { Authorization: `Bearer ${jwt}` } }
      )
      .toPromise();
  }
}
