import { Component } from '@angular/core';

@Component({
  selector: 'app-carousal',
  standalone: false,
  
  templateUrl: './carousal.component.html',
  styleUrl: './carousal.component.scss'
})
export class CarousalComponent {
  activeTab: string = 'preview';
  carouselItems = [
    { imageUrl: 'C1.jpg' },
    { imageUrl: 'C2.jpg' },
    { imageUrl: 'C3.jpg' }
  ];
  carouselItems1 = [
    { content: 'Slide One – Welcome to Giggly' },
    { content: 'Slide Two – Playful UI Library' },
    { content: 'Slide Three – Let’s Build Something Fun!' }
  ];  

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
