import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  standalone: false,
  
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponentGiggly {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  breadcrumbs = [
    { label: 'Home', url: '/home' },
    { label: 'Products', url: '/products' },
    { label: 'Electronics' } 
  ];

  handleBreadcrumbClick(clickedBreadcrumb: string) {
    console.log('Breadcrumb clicked:', clickedBreadcrumb);
  }
}
