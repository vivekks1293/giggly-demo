import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: false,
  
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
