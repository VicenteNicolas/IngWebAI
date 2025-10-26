import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LocationService } from '../../services/location.service';  
import { RegisterRequest } from '../../models/user.model';
import { Region, Comuna } from '../../models/location.model';  

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
export class RegisterPage implements OnInit {

  isLoading = false;
  isLoadingRegions = false;  
  isLoadingComunas = false;  

  username = '';
  rut = '';
  email = '';
  selectedRegion: Region | null = null;  
  selectedComuna: Comuna | null = null;  
  password = '';
  confirmPassword = '';
  termsAccepted = false;

  error = '';
  mensaje = '';

  regiones: Region[] = [];
  comunas: Comuna[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private locationService: LocationService 
  ) {}

  ngOnInit() {
    this.loadRegions();
  }

  private loadRegions() {
    this.isLoadingRegions = true;
    this.locationService.getRegions().subscribe({
      next: data => {
        this.regiones = data;
        this.isLoadingRegions = false;
      },
      error: err => {
        this.isLoadingRegions = false;
        this.error = err.message || 'Error al cargar regiones';
      }
    });
  }

  onRegionChange() {
    if (!this.selectedRegion) {
      this.comunas = [];
      this.selectedComuna = null;
      return;
    }

    this.isLoadingComunas = true;
    this.selectedComuna = null;
    this.locationService.getComunas(this.selectedRegion.id).subscribe({
      next: data => {
        this.comunas = data;
        this.isLoadingComunas = false;
      },
      error: err => {
        this.isLoadingComunas = false;
        this.error = err.message || 'Error al cargar comunas';
      }
    });
  }

  register(registerForm: NgForm) {
    this.error = '';
    this.mensaje = '';

    if (!this.username || !this.rut || !this.email || !this.selectedRegion || !this.selectedComuna || !this.password || !this.confirmPassword) {
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
      regionId: this.selectedRegion.id,
      comunaId: this.selectedComuna.id,
    };

    this.isLoading = true;
    this.authService.register(userData).subscribe({
      next: data => {
        this.isLoading = false;
        if (data.success) {
          this.mensaje = 'Usuario registrado exitosamente. Ahora puedes iniciar sesión.';
          this.resetForm(registerForm);
          setTimeout(() => {
            this.mensaje = '';
          }, 2000);
          setTimeout(() => this.router.navigate(['/login']), 2000);
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

  private resetForm(form?: NgForm) {
    this.username = '';
    this.rut = '';
    this.email = '';
    this.selectedRegion = null;
    this.selectedComuna = null;
    this.password = '';
    this.confirmPassword = '';
    this.termsAccepted = false;
    this.comunas = [];
    if (form) form.resetForm();
  }
}
