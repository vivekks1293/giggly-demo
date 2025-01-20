import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicButtonComponent } from './features/button/basic-button/basic-button.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { IconButtonComponent } from './features/button/icon-button/icon-button.component';
import { GroupButtonComponent } from './features/button/group-button/group-button.component';
import { SplitButtonComponent } from './features/button/split-button/split-button.component';
import { TextBoxComponent } from './features/Input&Forms/text-box/text-box.component';
import { TextAreaComponent } from './features/Input&Forms/text-area/text-area.component';
import { CheckboxComponent } from './features/Input&Forms/checkbox/checkbox.component';
import { RadiobuttonComponent } from './features/Input&Forms/radiobutton/radiobutton.component';
import { DropdownComponent } from './features/Input&Forms/dropdown/dropdown.component';
import { ToggleButtonComponent } from './features/Input&Forms/toggle-button/toggle-button.component';
import { SliderComponent } from './features/Input&Forms/slider/slider.component';
import { DatepickerComponent } from './features/Input&Forms/datepicker/datepicker.component';
import { FileUploadComponent } from './features/Input&Forms/file-upload/file-upload.component';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'basicbutton', component: BasicButtonComponent },
  { path: 'iconbutton', component: IconButtonComponent },
  { path: 'buttongroup', component: GroupButtonComponent },
  { path: 'splitbutton', component: SplitButtonComponent },
  { path: 'textbox', component: TextBoxComponent },
  { path: 'textarea', component: TextAreaComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'radiobutton', component: RadiobuttonComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'switch', component: ToggleButtonComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'fileupload', component: FileUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
