import { Component,OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm;
  constructor(private _form:FormBuilder){}
  ngOnInit(){
  this.userForm=this._form.group({
    fname:['',Validators.required],
    email:"test@test.com",
    street :'ssss',
    city : 'sd'
  });
}
  onSubmit(value)
  {
   
    console.log(value);
  }
}
