import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Parse from 'parse';
import { User } from '../models/User';

// Initialize Parse
Parse.initialize("app");
Parse.serverURL = 'http://localhost:1337/parse'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  // Redirect URL
  redirectUrl: string;

  constructor(private router: Router) {
    this.user = new User();
    this.user.loggedIn = false;
    this.redirectUrl = '/admin/landmarks';
  }

  login(username, password) {
    Parse.User.logIn(username, password).then((success) => {
      this.user.username = username;
      this.user.password = password;
      this.user.loggedIn = true;
      this.router.navigateByUrl(this.redirectUrl);
      return this.user;
    }, (err) => {
      window.alert("Invalid username and/or password");
      return this.user;
    });
  }

  logout() {
    Parse.User.logout().then((success) => {
      console.log(success);
      this.user.username = '';
      this.user.password = '';
      this.user.loggedIn = false;
      this.router.navigateByUrl('homepage');
    }, (err) => {
      window.alert(err);
    });
  }
}
