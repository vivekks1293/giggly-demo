import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: false,
  
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  activeTab: string = 'preview';
  

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  isAccepted: boolean = false;

  handleCheckboxChange(value: boolean) {
    console.log('Checkbox value:', value);
  }
  
  isChecked = false;
  giggleCount = 0;
  selectedTheme: 'default' | 'bubbly' | 'rainbow' = 'rainbow';
  playSound = true;
  useConfetti = false;
  selectedColor = '#4caf50';
  selectedEmoji = '✓';

  onGiggle() {
    this.giggleCount++;
  }
}
