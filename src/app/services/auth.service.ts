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
  // User instance
  user: User;
  // Observable value
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  // Redirect URL
  redirectUrl: string;

  // Constructor
  constructor(private router: Router) {
    this.user = new User();
    this.user.loggedIn = false;
    this.redirectUrl = '/admin/dashboard';
  }

  isAuthenticated(): boolean {
    if (Parse.User.current()) return true;
    else return false;
  }

  // Login user
  login(username, password) {
    Parse.User.logIn(username, password).then((success) => {
      this.user.username = username;
      this.user.password = password;
      this.user.loggedIn = true;
      this.loggedIn.next(true);
      this.router.navigateByUrl(this.redirectUrl);
      return this.user;
    }, (err) => {
      window.alert("Invalid username and/or password");
      return this.user;
    });
  }

  // Observable value
  get isUserLoggedIn() {
    return this.loggedIn.asObservable();
  }

  // Logout user
  logout() {
    Parse.User.logOut().then((res) => {
      this.user.username = '';
      this.user.password = '';
      this.user.loggedIn = false;
      this.loggedIn.next(false);
      this.router.navigateByUrl('homepage');
    }, (err) => {
      window.alert(err);
    });
  }
}
