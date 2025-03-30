import { Component } from '@angular/core';

@Component({
  selector: 'app-video-player',
  standalone: false,
  
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
