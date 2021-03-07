import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public authService: AuthServiceService, public router: Router) {}
  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}