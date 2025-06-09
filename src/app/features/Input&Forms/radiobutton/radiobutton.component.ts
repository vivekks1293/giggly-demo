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
  options = [
  { label: 'Happy', value: 'happy', emoji: '😊' },
  { label: 'Excited', value: 'excited', emoji: '🎉' },
  { label: 'Chill', value: 'chill', emoji: '😎' }
];
selectedValue: boolean = false;
onGiggle(event: any) {
  console.log(`${event.message} You selected: ${event.value}`);
}

  onColorChange(value: string) {
    console.log('Selected color:', value);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
