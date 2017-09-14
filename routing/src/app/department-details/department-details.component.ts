import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-details',
  template: `department called with id:{{departmentId}}`,
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
departmentId;
  constructor(private route:ActivatedRoute) {
    this.departmentId=this.route.snapshot.params['id'];
   }

  ngOnInit() {
  }

}
