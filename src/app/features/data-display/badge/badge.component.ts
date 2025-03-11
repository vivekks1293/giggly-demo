import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: false,
  
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
