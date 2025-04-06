import { Component } from '@angular/core';

@Component({
  selector: 'app-draggable-window',
  standalone: false,
  
  templateUrl: './draggable-window.component.html',
  styleUrl: './draggable-window.component.scss'
})
export class DraggableWindowComponent {
  activeTab: string = 'preview';
  showWindow = true;

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
