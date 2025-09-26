import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(data: { username: string, password: string }): Observable<any> {
    return this.http.post('http://localhost:3000/api/auth/login', data, { withCredentials: true });
  }
  register(data: { 
    username: string; 
    password: string; 
    rut: string; 
    email: string; 
    region: string; 
    comuna: string; 
  }): Observable<any> {
    return this.http.post('http://localhost:3000/api/auth/register', data);
  }
  session(): Observable<any> {
    return this.http.get('http://localhost:3000/api/auth/session', { withCredentials: true });
  }
  logout() {
    localStorage.clear();
  }
}
