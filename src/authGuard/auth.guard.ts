import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../app/services/auth/auth.service";
import { UserService } from "../app/services/user/user.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    public auth: AuthService,
    public router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(["login"]);
      return false;
    }
     else {
      this.userService.tokenControl().subscribe(
        data => {
          return true;
        },
        error => {
          this.router.navigate(["login"]);
          return false;
        }
      );
    }
    return true;
  }
}
