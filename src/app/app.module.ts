import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GigglyModule } from 'giggly';
import { BasicButtonComponent } from './features/button/basic-button/basic-button.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './features/layout/header/header.component';
import { SidebarComponent } from './features/layout/sidebar/sidebar.component';
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
import { ProgressBarComponent } from './features/feedback/progress-bar/progress-bar.component';
import { CardComponent } from './features/layout/card/card.component';
import { ModalsComponent } from './features/layout/modals/modals.component';
import { AccordianComponent } from './features/layout/accordian/accordian.component';
import { TabComponent } from './features/layout/tab/tab.component';
import { GigglySidebarComponent } from './features/layout/giggly-sidebar/giggly-sidebar.component';
import { TooltipComponent } from './features/layout/tooltip/tooltip.component';
import { DividerComponent } from './features/layout/divider/divider.component';
@NgModule({
  declarations: [
    AppComponent,
    BasicButtonComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    IconButtonComponent,
    GroupButtonComponent,
    SplitButtonComponent,
    TextBoxComponent,
    TextAreaComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    DropdownComponent,
    ToggleButtonComponent,
    SliderComponent,
    DatepickerComponent,
    FileUploadComponent,
    AlertsComponent,
    SnackbarComponent,
    ProgressBarComponent,
    CardComponent,
    ModalsComponent,
    AccordianComponent,
    TabComponent,
    GigglySidebarComponent,
    TooltipComponent,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GigglyModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
