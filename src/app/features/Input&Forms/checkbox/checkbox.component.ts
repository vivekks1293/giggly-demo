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
}
