import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil-admin',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './perfil-admin.page.html',
  styleUrls: ['./perfil-admin.page.scss'],
})
export class PerfilAdminPage {
  username = localStorage.getItem('username') ?? '';
  role = localStorage.getItem('role') ?? '';

  constructor() {}
}
