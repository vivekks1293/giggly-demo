import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private router: Router) { }
  navigate(e: any) {
    if (e == 0) {
      this.router.navigate(['/basicbutton']);
    }
    if (e == 1) {
      this.router.navigate(['/textbox']);
    }

    if (e == 2) {
      this.router.navigate(['/dropdown']);
    }

    if (e == 3) {
      this.router.navigate(['/switch']);
    }
  }

  seeExample() {
    const element = document.getElementById('container');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
