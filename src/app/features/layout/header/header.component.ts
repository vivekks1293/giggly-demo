import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) { }
  isClient = false;

  ngOnInit() {
    this.isClient = true; // Ensures rendering only on the client
  }
  navigateToDashboard() {
    this.router.navigate(['/']);
  }
}
