import { Component } from '@angular/core';

@Component({
  selector: 'app-text-area',
  standalone: false,
  
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss'
})
export class TextAreaComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  handleTextareaChange(value: string) {
    console.log('Textarea value:', value);
  }
}
