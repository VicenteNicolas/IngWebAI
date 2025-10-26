import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AdminService {

  private baseUrl = 'http://localhost:3000/api/admin';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): { headers: HttpHeaders } {
    const token = this.authService.getToken();
    return token ? { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) } : { headers: new HttpHeaders() };
  }

  getUsers(): Observable<{ success: boolean, users: any[] }> {
    return this.http.get<{ success: boolean, users: any[] }>(`${this.baseUrl}/users`, this.getHeaders());
  }

  toggleUser(username: string, activate: boolean): Observable<{ success: boolean, message?: string }> {
    const url = `${this.baseUrl}/${activate ? 'activate' : 'deactivate'}/${username}`;
    return this.http.put<{ success: boolean, message?: string }>(url, {}, this.getHeaders());
  }

  deleteUser(username: string): Observable<{ success: boolean, message?: string }> {
    return this.http.delete<{ success: boolean, message?: string }>(`${this.baseUrl}/delete/${username}`, this.getHeaders());
  }
}
