import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { AuthService } from '../../services/auth.service';  
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonToggle,      
  IonListHeader,
  IonNote,
  IonBadge       
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; 
import { trash, person, power, create } from 'ionicons/icons';

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
  imports: [
    // Componentes Ionic porque me daba error con el docker
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    IonToggle,
    IonListHeader,
    IonNote,
    IonBadge,
    // Angular
    CommonModule, 
    RouterModule
  ]
})
export class AdminPage implements OnInit {

  activeUsers: User[] = [];
  inactiveUsers: User[] = [];
  message = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private adminService: AdminService, private authService: AuthService, private router: Router) {
    addIcons({ trash, person, power, create });
  }  

  ngOnInit() {
    this.authService.session().subscribe({
      next: (data) => {
        if (!data.success || data.user.role !== 'admin') {
          this.router.navigate(['/login']);  
        } else {
          this.loadUsers();  
        }
      },
      error: (err) => {
        console.error('Error en sesión:', err);
        this.showMessage('Error de conexión', 'error');
        this.router.navigate(['/login']);
      }
    });
  }

  showMessage(msg: string, type: 'success' | 'error' = 'success') {
    this.message = msg;
    this.messageType = type;
    setTimeout(() => this.message = '', 7000);
  }

  loadUsers() {
    this.adminService.getUsers().subscribe({
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
    this.adminService.toggleUser(username, activate).subscribe({
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

    this.adminService.deleteUser(username).subscribe({
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
    this.authService.logout(); 
    this.router.navigate(['/login']);
  }
}