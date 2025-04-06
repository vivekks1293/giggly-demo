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
import { GridComponent } from './features/data-display/grid/grid.component';
import { TreeviewComponent } from './features/data-display/treeview/treeview.component';
import { AvatarComponent } from './features/data-display/avatar/avatar.component';
import { BadgeComponent } from './features/data-display/badge/badge.component';
import { ChipsComponent } from './features/data-display/chips/chips.component';
import { CarousalComponent } from './features/media/carousal/carousal.component';
import { ImageViewerComponent } from './features/media/image-viewer/image-viewer.component';
import { VideoPlayerComponent } from './features/media/video-player/video-player.component';
import { DragListComponent } from './features/media/drag-list/drag-list.component';
import { VotingComponent } from './features/misc/voting/voting.component';
import { DraggableWindowComponent } from './features/layout/draggable-window/draggable-window.component';
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
  { path: 'grid', component: GridComponent},
  { path: 'treeview', component: TreeviewComponent},
  { path: 'avatar', component: AvatarComponent},
  { path: 'badge', component: BadgeComponent},
  { path: 'chip', component: ChipsComponent},
  { path: 'carousal', component: CarousalComponent},
  { path: 'imageview', component: ImageViewerComponent},
  { path: 'videoplayer', component: VideoPlayerComponent},
  { path: 'draglist', component: DragListComponent},
  { path: 'voting', component: VotingComponent},
  { path: 'dragwindow', component: DraggableWindowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
