import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
