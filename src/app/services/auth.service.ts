import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { RegisterRequest } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth'; 
  
  constructor(private http: HttpClient) {}

  login(data: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data).pipe(
      tap((res: any) => {
        if (res.success && res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role);
        }
      }),
      catchError(err => {
        console.error('Error en login:', err);
        return throwError(() => new Error('Error de conexión'));
      })
    );
  }

  register(user: RegisterRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user).pipe(
      catchError(err => {
        console.error('Error en register:', err);
        return throwError(() => new Error('Error de conexión'));
      })
    );
  }

  session(): Observable<any> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.get(`${this.apiUrl}/session`, { headers }).pipe(
      catchError(err => {
        console.error('Error en session:', err);
        return throwError(() => new Error('Error de conexión'));
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
}
