import { Component } from '@angular/core';

@Component({
  selector: 'app-text-box',
  standalone: false,
  
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.scss'
})
export class TextBoxComponent {
  username: string = 'DefaultUser';
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  handleValueChange(value: string) {
    console.log('Input value changed:', value);
  }
}
