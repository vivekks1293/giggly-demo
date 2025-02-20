import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-sidebar',
  standalone: false,
  
  templateUrl: './navbar-sidebar.component.html',
  styleUrl: './navbar-sidebar.component.scss'
})
export class NavbarSidebarComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  sidebarMenuList = [
    {
      label: 'Dashboard',
      route: '/dashboard'
    },
    {
      label: 'Reports',
      children: [
        { label: 'Sales', route: '/reports/sales' },
        { label: 'Users', route: '/reports/users' },
        { 
          label: 'More Reports', 
          children: [
            { label: 'Finance', route: '/reports/finance' },
            { label: 'Marketing', route: '/reports/marketing' }
          ] 
        }
      ]
    },
    {
      label: 'Settings',
      route: '/settings'
    },
    {
      label: 'Logout',
      route: '/logout'
    }
  ];

  handleSidebarClick(menuItem: any) {
    console.log('Sidebar item clicked:', menuItem);
  }
}
