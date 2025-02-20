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
import { AlertsComponent } from './features/feedback/alerts/alerts.component';
import { SnackbarComponent } from './features/feedback/snackbar/snackbar.component';
import { ProgressBarComponent } from './features/feedback/progress-bar/progress-bar.component'
import { CardComponent } from './features/layout/card/card.component';
import { ModalsComponent } from './features/layout/modals/modals.component';
import { AccordianComponent } from './features/layout/accordian/accordian.component';
import { TabComponent } from './features/layout/tab/tab.component';
import { GigglySidebarComponent } from './features/layout/giggly-sidebar/giggly-sidebar.component';
import { TooltipComponent } from './features/layout/tooltip/tooltip.component';
import { DividerComponent } from './features/layout/divider/divider.component';
import { BreadcrumbComponentGiggly } from './features/navigation/breadcrumb/breadcrumb.component';
import { StepperComponent } from './features/navigation/stepper/stepper.component';
import { NavbarComponent } from './features/navigation/navigation/navbar/navbar.component';
import { NavbarSidebarComponent } from './features/navigation/navbar-sidebar/navbar-sidebar.component';

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
  { path: 'fileupload', component: FileUploadComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'progressbar', component: ProgressBarComponent },
  { path: 'cards', component: CardComponent },
  { path: 'modal', component: ModalsComponent },
  { path: 'accordian', component: AccordianComponent },
  { path: 'tabs', component: TabComponent },
  { path: 'sidebar', component: GigglySidebarComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'divider', component: DividerComponent },
  { path: 'breadcrumb', component: BreadcrumbComponentGiggly },
  { path: 'stepper', component: StepperComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'sidebar', component: NavbarSidebarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
