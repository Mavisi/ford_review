import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { getAllCars, Vehicle } from '../../data/mock-vehicles'; // função que retorna os veículos mockados

@Component({
  selector: 'app-meus-reviews',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './meus-reviews.component.html',
  styleUrls: ['./meus-reviews.component.css']
})
export class MeusReviewsComponent implements OnInit {
  loggedUser: any = null; // dados do usuário logado
  allReviews: { car: Vehicle, review: any }[] = []; // reviews feitos por esse usuário

  ngOnInit(): void {
    // Obtém o usuário logado
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser') || 'null');

    // Se não houver usuário logado, encerra o carregamento
    if (!this.loggedUser) return;

    // Carrega todos os carros disponíveis
    const cars = getAllCars();

    // Para cada carro, busca os reviews salvos no localStorage
    for (const car of cars) {
      const reviews = JSON.parse(localStorage.getItem(`reviews_${car.id}`) || '[]');

      // Filtra apenas os reviews feitos pelo usuário atual
      const userReviews = reviews.filter((r: any) => r.user === this.loggedUser.displayName);

      // Associa o review com o carro correspondente
      userReviews.forEach((review: any) => {
        this.allReviews.push({ car, review });
      });
    }
  }
}
