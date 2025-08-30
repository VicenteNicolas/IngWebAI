import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ]
})
export class RegisterPage {
  username = '';
  password = '';
  error = '';
  mensaje = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    if (!this.username || !this.password) {
      this.error = 'Debes completar todos los campos';
      this.mensaje = '';
      return;
    }

    this.http.post<any>('http://localhost:3000/api/auth/register', {
      username: this.username,
      password: this.password
    }).subscribe(
      data => {
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
      err => {
        console.error(err);
        this.error = 'Error de conexión';
        this.mensaje = '';
      }
    );
  }
}
