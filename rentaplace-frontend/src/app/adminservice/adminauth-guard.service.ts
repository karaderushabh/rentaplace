import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AdminauthenticationService } from './adminauthentication.service';

@Injectable({
  providedIn: 'root',
})
export class AdminauthGuardService {
  constructor(
    private router: Router,
    private adminauthservice: AdminauthenticationService
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.adminauthservice.isAdminLoggedIn()) return true;

    this.router.navigate(['ownerlogin']);
    return false;
  }
}
