import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-list',
  standalone: false,

  templateUrl: './drag-list.component.html',
  styleUrl: './drag-list.component.scss'
})
export class DragListComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  items = ['Apple', 'Banana', 'Cherry', 'Dragonfruit'];

  onReorder(updated: string[]) {
    console.log('Updated order:', updated);
  }
}

