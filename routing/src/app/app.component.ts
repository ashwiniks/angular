import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h2>Routing Application</h2>
  <nav><a routerLink="/department" class="btn btn-primary">DepartmentList</a>
  <a routerLink="/employee" class="btn btn-primary">EmployeeList</a></nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
