import { Component } from '@angular/core';

@Component({
  selector: 'app-accordian',
  standalone: false,
  
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.scss'
})
export class AccordianComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
