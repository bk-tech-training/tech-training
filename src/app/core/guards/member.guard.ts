import { Injectable } from '@angular/core';
import {
  CanActivate,
  UrlTree,
  CanLoad,
  Router,
} from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class MemberGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isLoggedIn();
  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.isLoggedIn();
  }

  private isLoggedIn(): Observable<boolean> {
    return this.authService.currentUser.pipe(
      take(1),
      map((user) => !!user),
      tap(async (isUserLoggedIn: boolean) => {
        if (!isUserLoggedIn) {
          await this.router.navigate(['/']);
        }
      })
    );
  }
}
