import { Component, ViewChild, TemplateRef } from '@angular/core';
import { SplitButtonOption } from '../../../../../node_modules/giggly/lib/components/buttons/split-button/split-button.component';
@Component({
  selector: 'app-split-button',
  standalone: false,
  
  templateUrl: './split-button.component.html',
  styleUrl: './split-button.component.scss'
})
export class SplitButtonComponent {
  @ViewChild('emailIcon') emailIconTemplate!: TemplateRef<any>;
  @ViewChild('twitterIcon') twitterIconTemplate!: TemplateRef<any>;
  @ViewChild('facebookIcon') facebookIconTemplate!: TemplateRef<any>;
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  contactOptions = [
    { label: 'Add Person', action: 'person' },
    { label: 'Add Company', action: 'company' },
    { label: 'Import Contacts', action: 'import' }
  ];
  
  ngAfterViewInit() {
    
  }

  onSave() {
    console.log('Default save action');
  }

  onOptionSelected(action: string) {
    console.log('Selected action:', action);
    // Handle the specific action
    switch(action) {
      case 'draft':
        // Save as draft logic
        break;
      case 'publish':
        // Save and publish logic
        break;
      case 'template':
        // Save as template logic
        break;
    }
  }
}
