import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SidebarComponent {
  loggedUser = JSON.parse(localStorage.getItem('loggedUser') || 'null');

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('loggedUser');
    this.router.navigate(['/auth']);
  }

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
