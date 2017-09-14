import { Component, OnInit } from '@angular/core';
import{ RouterModule,Router} from '@angular/router'
@Component({
  selector: 'app-department-list',
  template: `<ul class="items">  
  <li *ngFor="let department of departments">
  <a (click)="onSelect(department)">
  <span class="badge">{{department.id}}</span><span>{{department.name}}</span>
  </a></li>
  </ul>`,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments=[{'id':1,'name':'node'},
 {'id':2,'name':'angular'},
 {'id':3,'name':'php'},
 {'id':4,'name':'dotnet'},
 {'id':5,'name':'java'}

];
  constructor(private router:Router) { }
  onSelect(department)
  {
    this.router.navigate(['/department-details',department.id]);
  }

  ngOnInit() {
  }

}
