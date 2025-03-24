import { Component } from '@angular/core';

@Component({
  selector: 'app-chips',
  standalone: false,
  
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  chips = ['Angular', 'Giggly UI', 'TypeScript'];

  removeChip(index: number) {
    this.chips.splice(index, 1);
  }
  alert(e:any){

  }
}
