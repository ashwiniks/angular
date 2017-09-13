import { Component } from '@angular/core';
import {EmployeeService} from './employee.service'
@Component({
  selector: 'app-root',
  template: `<ul><li *ngFor="let title of title">{{title.name}} : {{title.age}}</li></ul>
  {{error}}
  `,
  styleUrls: ['./app.component.css'],
  providers:[EmployeeService]
})
export class AppComponent {
  title;
  error;
  constructor(private _employeeService:EmployeeService){}
  ngOnInit()
  {
    this._employeeService.getEmployee().subscribe((res:Response)=>this.title=res,
    (errorResult:Response)=>this.error=errorResult
  
  );
  }
}
