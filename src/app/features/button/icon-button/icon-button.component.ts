import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  standalone: false,

  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  handleClick() {
    alert('Giggly Button Clicked!');
  }

  onButtonClick(e:any){
    
  }
}
