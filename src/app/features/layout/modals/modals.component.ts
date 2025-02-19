import { Component } from '@angular/core';

@Component({
  selector: 'app-modals',
  standalone: false,
  
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.scss'
})
export class ModalsComponent {
  activeTab: string = 'preview';
  modalVisible = false;

  openModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  submit(){
  }
}
