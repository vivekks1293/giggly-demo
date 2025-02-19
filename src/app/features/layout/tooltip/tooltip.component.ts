import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: false,
  
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
