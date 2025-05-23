import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'; // ajuste o caminho se necessário

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadComponent: () => import('./pages/auth/auth.component').then(m => m.AuthComponent) },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'car/:id',
    loadComponent: () => import('./pages/car-details/car-details.component').then(m => m.CarDetailsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'meus-reviews',
    loadComponent: () => import('./pages/meus-reviews/meus-reviews.component').then(m => m.MeusReviewsComponent),
    canActivate: [AuthGuard]
  }
];
