import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component'; // ajuste o caminho se necessário

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [SidebarComponent] // importa a sidebar aqui
})
export class DashboardComponent {}
