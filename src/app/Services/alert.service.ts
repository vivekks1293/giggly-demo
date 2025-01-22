import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alerts: { message: string; type: 'success' | 'warning' | 'error' | 'info'; dismissible: boolean }[] = [];

  showAlert(message: string, type: 'success' | 'warning' | 'error' | 'info', dismissible: boolean = true) {
    this.alerts.push({ message, type, dismissible });
    setTimeout(() => {
      this.removeAlert(0);
    }, 5000);
  }

  getAlerts() {
    return this.alerts;
  }

  removeAlert(index: number) {
    this.alerts.splice(index, 1);
  }
}
