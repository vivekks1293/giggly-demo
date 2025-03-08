import { Component } from '@angular/core';

@Component({
  selector: 'app-treeview',
  standalone: false,
  
  templateUrl: './treeview.component.html',
  styleUrl: './treeview.component.scss'
})
export class TreeviewComponent {
  activeTab: string = 'preview';
  title = 'Giggly Tree View Demo';

  treeData = [
    {
      label: 'Parent 1',
      expanded: true,
      children: [
        { label: 'Child 1' },
        { label: 'Child 2' },
        {
          label: 'Sub-Parent',
          children: [
            { label: 'Sub-Child 1' },
            { label: 'Sub-Child 2' }
          ]
        }
      ]
    },
    {
      label: 'Parent 2',
      children: [
        { label: 'Child A' },
        { label: 'Child B' }
      ]
    }
  ];

  handleNodeSelect(node: any) {
    console.log('Selected Node:', node);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
