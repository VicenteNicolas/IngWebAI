import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-user',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './perfil-user.page.html',
  styleUrls: ['./perfil-user.page.scss'],
})
export class PerfilUserPage {
  username = localStorage.getItem('username') ?? 'Usuario';
  role = localStorage.getItem('role') ?? 'user';

  constructor(private router: Router) {}

  getUserInitial(): string {
    return this.username?.charAt(0).toUpperCase() || 'U';
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
