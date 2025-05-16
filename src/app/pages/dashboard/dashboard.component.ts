import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  initializeLocalStorage,
  getAllCars,
  Vehicle,
} from '../../data/mock-vehicles';

import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [SidebarComponent, CommonModule, FormsModule], // importa a sidebar aqui
})
export class DashboardComponent implements OnInit {

 constructor(private router: Router) {}

goToDetails(id: number): void {
  this.router.navigate(['/carro', id]);
}

  cars: Vehicle[] = [];
  filteredCars: Vehicle[] = [];

  nameFilter = '';
  typeFilter = 'Todos';
  yearFilter = 'Todos';

  ngOnInit(): void {
    initializeLocalStorage();
    this.cars = getAllCars();
    this.filteredCars = [...this.cars];
  }

  filterCars() {
    this.filteredCars = this.cars.filter((car) => {
      const matchesName = this.nameFilter
        ? car.name.toLowerCase().includes(this.nameFilter.toLowerCase())
        : true;
      const matchesType =
        this.typeFilter !== 'Todos' ? car.type === this.typeFilter : true;
      const matchesYear =
        this.yearFilter !== 'Todos'
          ? car.year === Number(this.yearFilter)
          : true;
      return matchesName && matchesType && matchesYear;
    });
  }

  getUniqueTypes(): string[] {
    const types = this.cars.map((car) => car.type);
    return ['Todos', ...Array.from(new Set(types))];
  }

  getUniqueYears(): string[] {
    const years = this.cars.map((car) => car.year);
    return ['Todos', ...Array.from(new Set(years.map((y) => y.toString())))];
  }
}
