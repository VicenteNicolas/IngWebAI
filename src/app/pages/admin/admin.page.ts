import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

interface User {
  username: string;
  role: string;
  activo: number | string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HttpClientModule, RouterModule]
})
export class AdminPage implements OnInit {

  activeUsers: User[] = [];
  inactiveUsers: User[] = [];
  message = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadUsers();
  }

  showMessage(msg: string, type: 'success' | 'error' = 'success') {
    this.message = msg;
    this.messageType = type;
    setTimeout(() => this.message = '', 7000);
  }

  loadUsers() {
    this.http.get<{ success: boolean, users: User[] }>(
      'http://localhost:3000/admin/users',
      { withCredentials: true }  
    ).subscribe({
      next: data => {
        if (!data.success) return this.showMessage('Error al cargar usuarios', 'error');
        this.activeUsers = data.users.filter(u => u.activo == 1);
        this.inactiveUsers = data.users.filter(u => u.activo != 1);
      },
      error: err => {
        console.error(err);
        this.showMessage('Error de conexión', 'error');
      }
    });
  }

  toggleUser(username: string, activate: boolean) {
    const url = `http://localhost:3000/admin/${activate ? 'activate' : 'deactivate'}/${username}`;
    this.http.put<{ success: boolean, message?: string }>(
      url,
      {},
      { withCredentials: true } 
    ).subscribe({
      next: data => {
        if (data.success) {
          this.showMessage(`Usuario "${username}" ${activate ? 'activado' : 'desactivado'}`);
          this.loadUsers();
        } else this.showMessage(data.message || 'Error', 'error');
      },
      error: err => {
        console.error(err);
        this.showMessage('Error de conexión', 'error');
      }
    });
  }

  deleteUser(username: string) {
    if (!confirm(`¿Seguro que quieres eliminar al usuario "${username}"?`)) return;

    this.http.delete<{ success: boolean, message?: string }>(
      `http://localhost:3000/admin/delete/${username}`,
      { withCredentials: true }  
    ).subscribe({
      next: data => {
        if (data.success) {
          this.showMessage(`Usuario "${username}" eliminado`);
          this.loadUsers();
        } else this.showMessage(data.message || 'Error', 'error');
      },
      error: err => {
        console.error(err);
        this.showMessage('Error de conexión', 'error');
      }
    });
  }

  logout() {
    localStorage.removeItem('user'); 
    this.router.navigate(['/login']);
  }
}
