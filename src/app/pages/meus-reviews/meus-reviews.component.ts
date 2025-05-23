import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { getAllCars, Vehicle } from '../../data/mock-vehicles';

@Component({
  selector: 'app-meus-reviews',
  standalone: true,
  imports: [CommonModule, SidebarComponent, FormsModule],
  templateUrl: './meus-reviews.component.html',
  styleUrls: ['./meus-reviews.component.css']
})
export class MeusReviewsComponent implements OnInit {
  loggedUser: any = null;
  allReviews: { car: Vehicle, review: any }[] = [];

  editMode: boolean = false;
  reviewToEdit: any = null;

  ngOnInit(): void {
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser') || 'null');
    if (!this.loggedUser) return;

    this.loadReviews();
  }

  loadReviews(): void {
    this.allReviews = [];
    const cars = getAllCars();

    for (const car of cars) {
      const reviews = JSON.parse(localStorage.getItem(`reviews_${car.id}`) || '[]');
      const userReviews = reviews.filter((r: any) => r.user === this.loggedUser.displayName);
      userReviews.forEach((review: any) => {
        this.allReviews.push({ car, review });
      });
    }
  }

  startEdit(item: { car: Vehicle, review: any }): void {
    this.editMode = true;
    this.reviewToEdit = {
      ...item.review,
      carId: item.car.id
    };
  }

  saveEdit(): void {
    const carId = this.reviewToEdit.carId;
    let reviews = JSON.parse(localStorage.getItem(`reviews_${carId}`) || '[]');

    reviews = reviews.map((r: any) => {
      if (
        r.user === this.loggedUser.displayName &&
        r.date === this.reviewToEdit.date
      ) {
        return { ...this.reviewToEdit };
      }
      return r;
    });

    localStorage.setItem(`reviews_${carId}`, JSON.stringify(reviews));
    this.editMode = false;
    this.reviewToEdit = null;
    this.loadReviews();
  }

  deleteReview(item: { car: Vehicle, review: any }): void {
    const carId = item.car.id;
    let reviews = JSON.parse(localStorage.getItem(`reviews_${carId}`) || '[]');

    reviews = reviews.filter(
      (r: any) =>
        !(r.user === this.loggedUser.displayName && r.date === item.review.date)
    );

    localStorage.setItem(`reviews_${carId}`, JSON.stringify(reviews));
    this.loadReviews();
  }
}
