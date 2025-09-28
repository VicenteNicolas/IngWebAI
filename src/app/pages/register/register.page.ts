import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RegisterRequest } from '../../models/user.model';

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

  isLoading = false;

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

  //Ahora esta feo, hay que arreglar esta parte a futuro para modularizarlo, pero por mientras sirve para

  // Lista de regiones
  regiones: string[] = [
    'Región Metropolitana',
    'Valparaíso',
    'Biobío',
    'Antofagasta'
  ];

  // Comunas agrupadas por región
  comunasPorRegion: { [key: string]: string[] } = {
    'Región Metropolitana': ['Santiago', 'Puente Alto', 'Las Condes', 'Maipú'],
    'Valparaíso': ['Valparaíso', 'Viña del Mar', 'Quilpué', 'Villa Alemana'],
    'Biobío': ['Concepción', 'Talcahuano', 'Coronel', 'Los Ángeles'],
    'Antofagasta': ['Antofagasta', 'Calama', 'Mejillones']
  };

  // Lista actual de comunas según la región seleccionada
  comunas: string[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  // Cuando cambia la región se actualizan las comunas
  onRegionChange() {
    this.comunas = this.comunasPorRegion[this.region] || [];
    this.comuna = ''; 
  }

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

    const userData: RegisterRequest = {
      username: this.username,
      password: this.password,
      rut: this.rut,
      email: this.email,
      region: this.region,
      comuna: this.comuna,
    };

    this.isLoading = true;

    this.authService.register(userData).subscribe({
      next: data => {
        this.isLoading = false;

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
        this.isLoading = false;
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
    this.comunas = [];
  }
}
