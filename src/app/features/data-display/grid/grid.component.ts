import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  standalone: false,
  
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  gridData = [
    { id: 1, productName: 'Laptop', category: 'Electronics', price: 1200 },
    { id: 2, productName: 'Phone', category: 'Electronics', price: 800 },
    { id: 3, productName: 'Chair', category: 'Furniture', price: 150 },
    { id: 4, productName: 'Desk', category: 'Furniture', price: 300 },
    { id: 5, productName: 'Mobile', category: 'Electronic', price: 14000 },
    { id: 1, productName: 'Laptop', category: 'Electronics', price: 1200 },
    { id: 2, productName: 'Phone', category: 'Electronics', price: 800 },
    { id: 3, productName: 'Chair', category: 'Furniture', price: 150 },
    { id: 4, productName: 'Desk', category: 'Furniture', price: 300 },
    { id: 5, productName: 'Mobile', category: 'Electronic', price: 14000 },
  ];

  handleSort(event: any) {
    console.log('Sorting:', event);
  }

  onSortChange(event: any) {
    console.log('Sorting:', event);
  }
  
  onFilterChange(event:any) {
    console.log('Filtering:', event);
  }
  
  
}
