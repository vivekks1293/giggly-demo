import { Component } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  standalone: false,
  
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  undoAction = () => {
    console.log('Undo action clicked!');
  };

  showSnackbar(snackbar: any) {
    snackbar.show();
  }
}
