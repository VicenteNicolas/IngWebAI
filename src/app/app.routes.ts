import { Routes } from '@angular/router';
import { AdminGuard } from './guards/admin-guard';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin.page').then( m => m.AdminPage),
    canActivate: [AdminGuard]
  },

  {
    path: 'perfil-user',
    loadComponent: () => import('./pages/perfil-user/perfil-user.page').then(m => m.PerfilUserPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil-admin',
    loadComponent: () => import('./pages/perfil-admin/perfil-admin.page').then(m => m.PerfilAdminPage),
    canActivate: [AdminGuard]
  },
];


