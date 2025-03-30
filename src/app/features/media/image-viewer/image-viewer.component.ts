import { Component } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  standalone: false,
  
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.scss'
})
export class ImageViewerComponent {
  imageUrl = 'C1.jpg';
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
