import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-giggly-context-menu',
  standalone: false,
  templateUrl: './giggly-context-menu.component.html',
  styleUrl: './giggly-context-menu.component.scss'
})
export class GigglyContextMenuComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  @ViewChild('contextMenu') contextMenu: any;

  menuItems = [
    { label: 'Edit', icon: 'fas fa-edit', action: 'edit' },
    { label: 'Delete', icon: 'fas fa-trash', action: 'delete' },
    { label: 'Share', icon: 'fas fa-share-alt', action: 'share' }
  ];

  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.contextMenu.open(event.clientX, event.clientY);
  }

  handleMenuAction(action: string) {
    console.log('Selected:', action);
  }
}
