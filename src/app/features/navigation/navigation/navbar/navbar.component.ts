import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  menuList = [
    {
      label: 'Home',
      route: '/home'
    },
    {
      label: 'Products',
      children: [
        { label: 'Electronics', route: '/products/electronics' },
        { label: 'Clothing', route: '/products/clothing' },
        { 
          label: 'More Categories', 
          children: [
            { label: 'Sports', route: '/products/sports' },
            { label: 'Accessories', route: '/products/accessories' }
          ] 
        }
      ]
    },
    {
      label: 'About Us',
      route: '/about'
    },
    {
      label: 'Contact',
      route: '/contact'
    }
  ];

  handleMenuClick(menuItem: any) {
    console.log('Menu item clicked:', menuItem);
  }
}
