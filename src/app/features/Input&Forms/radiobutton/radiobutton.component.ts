import { Component } from '@angular/core';

@Component({
  selector: 'app-radiobutton',
  standalone: false,
  
  templateUrl: './radiobutton.component.html',
  styleUrl: './radiobutton.component.scss'
})
export class RadiobuttonComponent {
  activeTab: string = 'preview';
  selectedColor: string = 'red';

  onColorChange(value: string) {
    console.log('Selected color:', value);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
