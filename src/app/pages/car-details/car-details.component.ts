import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Vehicle, getAllCars } from '../../data/mock-vehicles';

@Component({
  selector: 'app-car-details',
  standalone: true,
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
  imports: [CommonModule]
})
export class CarDetailsComponent implements OnInit {
  car: Vehicle | null = null;

  constructor(private route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const allCars = getAllCars();
    this.car = allCars.find(c => c.id === id) || null;

    if (!this.car) {
      alert('Veículo não encontrado.');
      this.router.navigate(['/dashboard']);
    }
  }
}
