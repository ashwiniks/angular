/*
this class will used to fetch the employees from Db
*/
import{Injectable} from '@angular/core';
import{Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import{Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw';
@Injectable()

export class EmployeeService {
  
private _url :string="https://jsonplaceholder.typicode.com/users";
constructor(private _http:Http){}
    getEmployee() {
   return this._http.get(this._url).map((employeesResponse)=>employeesResponse.json());
                                    

    }
    private handleError(error: Response) { 
        console.error(error); 
        return Observable.throw(error.json()); 
     }

}