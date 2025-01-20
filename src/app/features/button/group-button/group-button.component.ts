import { Component } from '@angular/core';

@Component({
  selector: 'app-group-button',
  standalone: false,
  
  templateUrl: './group-button.component.html',
  styleUrl: './group-button.component.scss'
})
export class GroupButtonComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
