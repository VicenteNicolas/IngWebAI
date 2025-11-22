import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service'; 
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonItem, 
  IonInput, 
  IonButton,
  IonLabel 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    FormsModule,
    CommonModule,
    RouterModule,
  ]
})
export class LoginPage {
  username = '';
  password = '';
  error = '';
  mensaje = '';

  constructor(private authService: AuthService, private router: Router) {}

  ionViewWillEnter() {
    this.username = '';
    this.password = '';
    this.error = '';
    this.mensaje = '';
  }

  login() {
    this.error = '';
    this.mensaje = '';

    if (!this.username || !this.password) {
      this.error = 'Por favor completa todos los campos';
      return;
    }

    this.authService.login({ username: this.username, password: this.password })
      .subscribe({
        next: data => {
          if (data.success && data.token) {
            this.router.navigate([data.role === 'admin' ? '/admin' : '/home']);
          } else {
            this.error = data.message || 'Usuario o contraseña incorrectos';
          }
        },
        error: err => {
          console.error(err);
          this.error = 'Error de conexión';
        }
      });
  }
}