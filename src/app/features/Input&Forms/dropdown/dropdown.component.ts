import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: false,
  
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  activeTab: string = 'preview';
  selectedFruit: string = '';
  selectedEmployees: any[] = [];

  employeeList = [
    { EmpId: 1, EmpName: 'John Doe' },
    { EmpId: 2, EmpName: 'Jane Smith' },
    { EmpId: 3, EmpName: 'Alice Johnson' }
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  handleSelectionChange(value: any) {
    console.log('Selected Value:', value);
  }

  handleSearchResults(results: any[]) {
    console.log('Filtered Options:', results);
  }

}
