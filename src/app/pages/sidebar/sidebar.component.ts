import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

declare const bootstrap: any;

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule],
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('offcanvasRef') offcanvasRef!: ElementRef;
  loggedUser: any = null;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.loadUser();

    // Atualiza o usuário sempre que navegar entre páginas
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadUser();
    });
  }

  loadUser() {
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser') || 'null');
  }

  logoutAndClose() {
    localStorage.removeItem('loggedUser');
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(this.offcanvasRef.nativeElement);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
    this.router.navigate(['/auth']);
  }

  navigateAndClose(path: string) {
    this.router.navigate([path]);
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(this.offcanvasRef.nativeElement);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
  }
}
