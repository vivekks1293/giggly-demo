import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-button',
  standalone: false,

  templateUrl: './basic-button.component.html',
  styleUrl: './basic-button.component.scss'
})
export class BasicButtonComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  handleClick() {
    alert('Giggly Button Clicked!');
  }
}
