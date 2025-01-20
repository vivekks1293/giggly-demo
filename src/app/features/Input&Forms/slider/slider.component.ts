import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: false,
  
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  activeTab: string = 'preview';
  volume: number = 50;
  brightness: number = 100;

  handleSliderChange(value: number) {
    console.log('Slider value changed:', value);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
