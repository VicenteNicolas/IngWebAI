import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

// AGREGADO: IonBadge (Faltaba esto)
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonButtons,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonAvatar,
  IonText,
  IonIcon,
  IonBadge  // <--- ¡ESTE ERA EL CULPABLE!
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton, 
    IonButtons,
    IonList,
    IonItem,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonAvatar,
    IonText,
    IonIcon,
    IonBadge // <--- Agregado aquí también
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  username = localStorage.getItem('username');
  role = localStorage.getItem('role');
  
  instalaciones = [
    {
      nombre: 'VitaSport Arena',
      detalles: [
        'Gimnasio',
        '$12,000 CLP por media hora.',
        'Incluye acceso al salón multiusos, equipo de sonido y material básico.'
      ]
    },
    {
      nombre: 'DynamiX Center',
      detalles: [
        'Cancha Techada',
        '$10,000 CLP por media hora.',
        'Incluye sistema de sonido y materiales deportivos.'
      ]
    }
  ];

  constructor(private router: Router, private authService: AuthService) {}

  getUserInitial(): string {
    return this.username?.charAt(0).toUpperCase() || 'U';
  }

  goPerfil() {
    const role = this.authService.getRole();
    if (role === 'admin') {
      this.router.navigate(['/admin-perfil']);
    } else {
      this.router.navigate(['/perfil-user']);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}