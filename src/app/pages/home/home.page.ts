import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  instalaciones = [
    {
      nombre: 'VitaSport Arena',
      detalles: [
        'Gimnasio',
        '$12,000 CLP por media hora.',
        'Incluye acceso al salón multiusos, equipo de sonido y material básico (colchonetas, pesas ligeras, etc.).'
      ]
    },
    {
      nombre: 'DynamiX Center',
      detalles: [
        'Cancha Techada',
        '$10,000 CLP por media hora.',
        'Incluye uso del espacio, sistema de sonido y materiales básicos como bandas elásticas y variedad de balones.'
      ]
    }
  ];

  constructor(private router: Router, private authService: AuthService) {}  

  logout() {
    this.authService.logout();       
    this.router.navigate(['/login']); 
  }
}
