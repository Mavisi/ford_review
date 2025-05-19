import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

declare const bootstrap: any;
@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule],
})
export class SidebarComponent {
  loggedUser = JSON.parse(localStorage.getItem('loggedUser') || 'null');

  constructor(private router: Router) {}

  @ViewChild('offcanvasRef') offcanvasRef!: ElementRef;

  logoutAndClose() {
    localStorage.removeItem('loggedUser');
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(
      this.offcanvasRef.nativeElement
    );
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
    this.router.navigate(['/auth']);
  }

  navigateAndClose(path: string) {
    this.router.navigate([path]);
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(
      this.offcanvasRef.nativeElement
    );
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
  }
}
