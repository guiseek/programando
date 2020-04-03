import { CommonUiToolbarModule } from '@webapp/common/ui/toolbar';
import { CommonUiNavbarModule } from '@webapp/common/ui/navbar';
import { CommonUiCdkPopoverModule } from '@webapp/common/ui/cdk/popover';
import { SharedAuthModule } from '@webapp/shared/auth';
import { NgModule } from '@angular/core';
import { CommonUiCdkAccordionModule } from '@webapp/common/ui/cdk/accordion';
import { CommonUiSidenavModule } from '@webapp/common/ui/sidenav';
import { CommonUiVideoModule } from '@webapp/common/ui/video';
import { CommonUiBrandModule } from '@webapp/common/ui/brand';
import {
  CommonUiMaterialModule,
  CommonUiKitModule
} from '@webapp/common/ui/kit';import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ShellComponent } from './shell/shell.component';
import { OverviewComponent } from './overview/overview.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  imports: [
    ScullyLibModule,
    CommonUiKitModule,
    CommonUiBrandModule,
    CommonUiMaterialModule,
    CommonUiVideoModule,
    CommonUiToolbarModule,
    CommonUiSidenavModule,
    CommonUiNavbarModule,
    CommonUiCdkPopoverModule,
    CommonUiCdkAccordionModule,
    SharedAuthModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: [
          { path: '', component: CoursesComponent },
          { path: 'topico/:topic', component: OverviewComponent },
          { path: 'cursos/:id', component: CourseComponent },
          { path: '**', redirectTo: 'cursos' }
        ]
      }
    ])
  ],
  declarations: [ShellComponent, OverviewComponent, CourseComponent, CoursesComponent]
})
export class AcademyFeatureShellModule {}
