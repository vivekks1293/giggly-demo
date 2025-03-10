import { Component } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: false,
  
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.scss'
})
export class DividerComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
