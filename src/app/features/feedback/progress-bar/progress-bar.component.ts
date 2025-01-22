import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: false,
  
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  } 
  progressValue: number = 50;

  increaseProgress() {
    this.progressValue = Math.min(100, this.progressValue + 10);
  }
}
