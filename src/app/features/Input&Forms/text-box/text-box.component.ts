import { Component } from '@angular/core';
interface ContactModel {
  name: string;
  email: string;
  phone: string;
  message: string;
}
@Component({
  selector: 'app-text-box',
  standalone: false,
  
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.scss'
})
export class TextBoxComponent {
  username: string = 'DefaultUser';
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  handleValueChange(value: string) {
    console.log('Input value changed:', value);
  }

  contactModel: ContactModel = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onPhoneChange(value: string): void {
    console.log('Phone changed:', value);
  }
  
}
