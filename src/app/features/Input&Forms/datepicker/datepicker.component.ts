import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  standalone: false,
  
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent {
  activeTab: string = 'preview';
  selectedDate: Date | null = null;
  minDate: Date = new Date('2000-01-01');
  maxDate: Date = new Date('2030-12-31');

  handleDateChange(value: any) {
    console.log('Selected Date:', value);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
