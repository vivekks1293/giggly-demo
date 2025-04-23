import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: false,
  
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
