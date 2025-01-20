import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  standalone: false,
  
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  activeTab: string = 'preview';
  uploadedFiles: File[] = [];

  handleFileUpload(files: File[]) {
    this.uploadedFiles = files;
    console.log('Uploaded Files:', files);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
