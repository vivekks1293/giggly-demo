import { Component } from '@angular/core';

@Component({
  selector: 'app-giggly-sidebar',
  standalone: false,
  
  templateUrl: './giggly-sidebar.component.html',
  styleUrl: './giggly-sidebar.component.scss'
})
export class GigglySidebarComponent {
  activeTab: string = 'preview';
  sidebarOpen = true;
  
  handleSidebarToggle(state: boolean) {
    this.sidebarOpen = state;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
