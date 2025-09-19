import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminService {

  private baseUrl = 'http://localhost:3000/admin';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<{ success: boolean, users: any[] }> {
    return this.http.get<{ success: boolean, users: any[] }>(`${this.baseUrl}/users`, { withCredentials: true });
  }

  toggleUser(username: string, activate: boolean): Observable<{ success: boolean, message?: string }> {
    const url = `${this.baseUrl}/${activate ? 'activate' : 'deactivate'}/${username}`;
    return this.http.put<{ success: boolean, message?: string }>(url, {}, { withCredentials: true });
  }

  deleteUser(username: string): Observable<{ success: boolean, message?: string }> {
    return this.http.delete<{ success: boolean, message?: string }>(`${this.baseUrl}/delete/${username}`, { withCredentials: true });
  }
}
