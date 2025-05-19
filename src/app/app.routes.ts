import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import { MeusReviewsComponent } from './pages/meus-reviews/meus-reviews.component';


export const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'carro/:id', component: CarDetailsComponent },
  { path: 'meus-reviews', component: MeusReviewsComponent },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];
