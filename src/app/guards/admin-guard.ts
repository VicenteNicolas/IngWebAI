import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private http: HttpClient, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.http.get<{ success: boolean, user?: any }>(
      'http://localhost:3000/api/auth/session',
      { withCredentials: true }
    ).pipe(
      map(res => res.success && res.user?.role === 'admin'), 
      tap(isAdmin => {
        if (!isAdmin) {
          localStorage.removeItem('user');
          this.router.navigate(['/login']);
        }; 
      }),
      catchError(() => {
        localStorage.removeItem('user');
        this.router.navigate(['/login']); 
        return of(false);
      })
    );
  }
}
