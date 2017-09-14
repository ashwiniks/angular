import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ RouterModule,Routes} from '@angular/router';
import { DepartmentListComponent } from '../department-list/department-list.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { DepartmentDetailsComponent } from '../department-details/department-details.component';
export const routConstant:Routes=[{'path':'department','component':DepartmentListComponent},
{'path':'employee','component':EmployeeListComponent},
{'path':'department-details/:id','component':DepartmentDetailsComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routConstant)
  ],
  declarations: [ DepartmentListComponent,
    EmployeeListComponent,
    DepartmentDetailsComponent]
})
export class AppRouteModule { }
