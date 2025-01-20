import { Component } from '@angular/core';

@Component({
  selector: 'app-split-button',
  standalone: false,
  
  templateUrl: './split-button.component.html',
  styleUrl: './split-button.component.scss'
})
export class SplitButtonComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  handlePrimaryAction(event: Event) {
    console.log('Primary action clicked', event);
  }

  handleOptionSelect(action: string) {
    console.log('Selected action:', action);
  }
}
