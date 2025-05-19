import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./pages/sidebar/sidebar.component";
import { Router } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent,NgIf,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'review_ford';
  constructor(public router: Router) {}

  isAuthRoute(): boolean {
    return this.router.url.includes('auth');
  }
}
