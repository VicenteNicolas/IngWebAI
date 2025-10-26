import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return of(false);
    }

    return this.authService.session().pipe(
      map(res => !!res.success && !!res.user && res.user.role === 'admin'),
      tap(isAdmin => {
        if (!isAdmin) {
          this.router.navigate(['/login']);
        }
      }),
      catchError(() => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
