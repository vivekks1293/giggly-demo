import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: false,
  
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
