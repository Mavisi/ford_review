import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Vehicle, getAllCars } from '../../data/mock-vehicles';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-car-details',
  standalone: true,
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
  imports: [CommonModule, FormsModule, SidebarComponent],
})
export class CarDetailsComponent implements OnInit {
  // Informações do carro atual
  car: Vehicle | null = null;

  // Dados do usuário logado (puxado do localStorage)
  loggedUser: { displayName: string } | null = null;

  // Controle do formulário de avaliação
  reviewText: string = '';
  selectedRating: number = 0;

  // Lista de avaliações salvas para esse carro
  reviews: { user: string; date: string; comment: string; rating: number }[] =
    [];

  // Lista de imagens da galeria desse carro (futuramente)
  gallery: string[] = [];

  activeTab: 'reviews' | 'gallery' = 'reviews';
  // Controle de exibição do modal de avaliação
  modalAberto: boolean = false;

  constructor(
    public router: Router, // Usado no HTML para navegar
    private route: ActivatedRoute // Usado para pegar o ID da rota
  ) {}

  ngOnInit(): void {
    // Pega o ID do carro da rota (ex: /carro/2)
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Busca todos os carros e encontra o que corresponde ao ID
    const allCars = getAllCars();
    this.car = allCars.find((c) => c.id === id) || null;

    // Recupera o usuário logado (salvo no localStorage)
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser') || 'null');

    if (this.car) {
      // Carrega as avaliações do localStorage
      const storedReviews = localStorage.getItem(`reviews_${this.car.id}`);
      this.reviews = storedReviews ? JSON.parse(storedReviews) : [];

      // Carrega as fotos da galeria (se existirem)
      const storedGallery = localStorage.getItem(`gallery_${this.car.id}`);
      this.gallery = storedGallery ? JSON.parse(storedGallery) : [];
    } else {
      // Se não encontrar o carro, volta para o dashboard
      this.router.navigate(['/dashboard']);
    }
  }

  // Navega de volta para o dashboard
  goBack() {
    this.router.navigate(['/dashboard']);
  }

  // Abre o modal de avaliação
  openModal() {
    this.modalAberto = true;
  }

  // Fecha o modal e reseta os campos
  closeModal() {
    this.modalAberto = false;
    this.reviewText = '';
    this.selectedRating = 0;
  }

  // Publica uma nova avaliação e salva no localStorage
  submitReview() {

     console.log('Chamou submitReview');
     
    if (!this.car || !this.loggedUser) return;

    const newReview = {
      user: this.loggedUser.displayName,
      date: new Date().toLocaleDateString('pt-BR'),
      comment: this.reviewText,
      rating: this.selectedRating,
    };

    const existing = JSON.parse(
      localStorage.getItem(`reviews_${this.car.id}`) || '[]'
    );
    existing.push(newReview);
    localStorage.setItem(`reviews_${this.car.id}`, JSON.stringify(existing));

    this.reviews = existing;
    this.closeModal();
  }
  addPhoto(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64 = reader.result as string;

        if (this.car) {
          this.gallery.push(base64);
          localStorage.setItem(
            `gallery_${this.car.id}`,
            JSON.stringify(this.gallery)
          );
        }
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
}
