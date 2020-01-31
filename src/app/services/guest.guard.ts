import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  constructor(public authService: AuthService) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return false;
    }
    return true;
  }

}
