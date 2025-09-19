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
  password = '';
  error = '';
  mensaje = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.error = '';
    this.mensaje = '';

    if (!this.username || !this.password) {
      this.error = 'Debes completar todos los campos';
      this.mensaje = '';
      return;
    }

    this.authService.register({ username: this.username, password: this.password })
      .subscribe({
        next: data => {
          if (data.success) {
            this.mensaje = 'Usuario registrado exitosamente. Ahora puedes iniciar sesión.';
            this.error = '';
            this.username = '';
            this.password = '';
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 2000);
          } else {
            this.error = data.message || 'Error al registrar';
            this.mensaje = '';
          }
        },
        error: err => {
          console.error(err);
          this.error = 'Error de conexión';
          this.mensaje = '';
        }
      });
  }
}
