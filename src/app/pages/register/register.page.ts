import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ]
})
export class RegisterPage {
  username = '';
  rut = '';
  email = '';
  region = '';
  comuna = '';
  password = '';
  confirmPassword = '';
  termsAccepted = false;

  error = '';
  mensaje = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.error = '';
    this.mensaje = '';

    // Validaciones
    if (!this.username || !this.rut || !this.email || !this.region || !this.comuna || !this.password || !this.confirmPassword) {
      this.error = 'Debes completar todos los campos';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.error = 'Las contraseñas no coinciden';
      return;
    }

    if (!this.termsAccepted) {
      this.error = 'Debes aceptar los términos y condiciones';
      return;
    }

    this.authService.register({
      username: this.username,
      password: this.password,
      rut: this.rut,
      email: this.email,
      region: this.region,
      comuna: this.comuna
    }).subscribe({
      next: data => {
        if (data.success) {
          this.mensaje = 'Usuario registrado exitosamente. Ahora puedes iniciar sesión.';
          this.error = '';
          this.resetForm();
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        } else {
          this.error = data.message || 'Error al registrar';
        }
      },
      error: err => {
        console.error(err);
        this.error = 'Error de conexión';
      }
    });
  }

  private resetForm() {
    this.username = '';
    this.rut = '';
    this.email = '';
    this.region = '';
    this.comuna = '';
    this.password = '';
    this.confirmPassword = '';
    this.termsAccepted = false;
  }
}
