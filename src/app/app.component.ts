import { Component } from '@angular/core';

import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  carId: number = null;

  userCars: any[] = [];

  selectedCar: any = {}

  constructor(private readonly rest: RestService) {}
  title = 'bvtca-angular-api-connection';

  register() {
    this.rest.register({
      fname: this.firstName,
      lname: this.lastName,
      email: this.email,
      password: this.password
    });
  }

  logOut() {
    this.rest.logOut();
  }

  getCar() {
    this.rest.getCar(this.carId).then(res => {
      this.selectedCar = res;
      console.log(res)
    })
  }

  getUserCars() {
    this.rest.getUserCars().then(res => {
      this.userCars = res;
      console.log('getUserCars', res);
    });
  }
}
