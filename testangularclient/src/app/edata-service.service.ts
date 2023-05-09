import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './model/employee';
import { Chat } from './model/chat';
import { EmployeeData } from './model/employee-data';

@Injectable()
export class EDataServiceService {
  
	
  private allEmpURL !: string;
  private empURL !: string;
  private projectURL !: string;
  private allProjectURL !: string;

  constructor(private http: HttpClient) {
	  this.allEmpURL = "http://localhost:8080/employees";
	  this.empURL = "http://localhost:8080/employee/";
	  this.projectURL = "http://localhost:8080/project/";
	  this.allProjectURL = "http://localhost:8080/projects";
  }
  
  public findProjects() : Observable<Project[]> {
    return this.http.get<Project[]>(this.allProjectURL);
  }
  
  public findProject(id : string) : Observable<Project> {
    return this.http.get<Project>(this.projectURL + id);
  }
  
  public findEmployees(): Observable<Employee[]> {
	  return this.http.get<Employee[]>(this.allEmpURL);
  }
  
  public findEmployee(id : string): Observable<Employee> {
      return this.http.get<Employee>(this.empURL + id);
  }
  
  public editEmployee(employee : Employee) : void {
    this.http.post(this.empURL + employee.eid, employee);
  }
  
  public findEmployeeChats(id : string): Observable<Chat[]> {
	  return this.http.get<Chat[]>(this.empURL + id + "/chats");
  }
}
