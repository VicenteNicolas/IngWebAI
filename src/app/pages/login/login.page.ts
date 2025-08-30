import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class LoginPage {
  username = '';
  password = '';
  error = '';
  mensaje = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.error = '';
    this.mensaje = '';
    
    if (!this.username || !this.password) {
      this.error = 'Por favor completa todos los campos';
      return;
    }

    this.http.post<any>('http://localhost:3000/api/auth/login', {
      username: this.username,
      password: this.password
    }, { withCredentials: true })  
    .subscribe(
      data => {
        if (data.success) {
          localStorage.setItem('user', JSON.stringify({ username: this.username, role: data.role }));

          if (data.role === 'admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/inicio']);
          }
        } else {
          this.error = data.message || 'Usuario o contraseña incorrectos';
        }
      },
      err => {
        this.error = 'Error al conectar con el servidor';
      }
    );
  }
}