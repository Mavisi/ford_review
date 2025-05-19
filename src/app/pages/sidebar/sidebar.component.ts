import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule, RouterModule]
})
export class SidebarComponent {
  loggedUser = JSON.parse(localStorage.getItem('loggedUser') || 'null');

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('loggedUser');
    this.router.navigate(['/auth']);
  }
}
