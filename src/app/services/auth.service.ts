import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Parse from 'parse';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private router: Router, private toastr: ToastrService) {
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
      this.toastr.error("Invalid credentials!", 'Login failed!');
    });
  }

  // Observable value
  get isUserLoggedIn(): Observable<boolean> {
    this.loggedIn.next(this.isAuthenticated());
    return this.loggedIn;
  }

  // Logout user
  logout() {
    this.loggedIn.next(false);
    Parse.User.logOut().then((res) => {
      this.router.navigateByUrl('homepage');
    }, (err) => {
      this.toastr.error(err, 'Something went wrong!');
    });
  }
}
