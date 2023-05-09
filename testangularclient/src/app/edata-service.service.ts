import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './model/employee';
import { EmployeeData } from './model/employee-data';

@Injectable()
export class EDataServiceService {
	
  private allEmpURL !: string;
  private empURL !: string;

  constructor(private http: HttpClient) {
	  this.allEmpURL = "http://localhost:8080/employees";
	  this.empURL = "http://localhost:8080/employee/";
  }
  
  public findAll(): Observable<Employee[]> {
	  return this.http.get<Employee[]>(this.allEmpURL);
  }
  
  public findEmployee(id : string): Observable<EmployeeData> {
      return this.http.get<EmployeeData>(this.empURL + id);
  }
  
  public findEmployeeChats(id : string): Observable<String[]> {
	  return this.http.get<String[]>(this.empURL + id + "/chats");
  }
}
