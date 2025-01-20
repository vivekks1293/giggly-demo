import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: false,
  
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss'
})
export class ToggleButtonComponent {
  activeTab: string = 'preview';
  notificationsEnabled: boolean = false;
  darkMode: boolean = true;

  handleToggleChange(value: boolean) {
    console.log('Toggle state changed:', value);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
