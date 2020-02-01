import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Parse from 'parse';
import { User } from '../models/User';
import { BehaviorSubject } from 'rxjs';

// Initialize Parse
Parse.initialize("app");
Parse.serverURL = 'http://localhost:1337/parse'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Observable loggedIn flag
  private loggedIn: BehaviorSubject<boolean>;

  // Redirect URL
  redirectUrl: string;

  // Constructor
  constructor(private router: Router) {
    this.redirectUrl = '/admin/dashboard';
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  isAuthenticated(): boolean {
    if (Parse.User.current()) return true;
    else return false;
  }

  // Login user
  login(username, password) {
    Parse.User.logIn(username, password).then((success) => {
      this.loggedIn.next(true);
      this.router.navigateByUrl(this.redirectUrl);
    }, (err) => {
      window.alert("Invalid username and/or password");
    });
  }

  // Observable value
  get isUserLoggedIn() {
    return this.loggedIn.asObservable();
  }

  // Logout user
  logout() {
    this.loggedIn.next(false);
    Parse.User.logOut().then((res) => {
      this.router.navigateByUrl('homepage');
    }, (err) => {
      window.alert(err);
    });
  }
}
