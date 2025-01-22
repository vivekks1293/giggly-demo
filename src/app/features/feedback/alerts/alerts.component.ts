import { Component } from '@angular/core';
import { AlertService } from '../../../Services/alert.service';
@Component({
  selector: 'app-alerts',
  standalone: false,
  
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss'
})
export class AlertsComponent {
  activeTab: string = 'preview';
  constructor(public alertService: AlertService) {}
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  showSuccess() {
    this.alertService.showAlert('Operation successful!', 'success');
  }

  showWarning() {
    this.alertService.showAlert('Warning: Check your inputs!', 'warning');
  }

  showError() {
    this.alertService.showAlert('An error occurred!', 'error');
  }

  showInfo() {
    this.alertService.showAlert('For your information...', 'info');
  }
}
