import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EDataServiceService } from '../edata-service.service';
import { EmployeeData } from '../model/employee-data';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

	employee !: Employee;
	employeeForm = this.formBuilder.group({
	  firstName: '',
	  lastName: '',
	  email: '',
	  street: '',
	  nr: '',
	  phoneNumber: ''
	});
	
	constructor(private route : ActivatedRoute, private eService : EDataServiceService, private formBuilder : FormBuilder) {
		this.route.params.subscribe( params => {
			this.eService.findEmployee(params['id']).subscribe(data => {
				this.employee = data;
	      //TODO: authorization für diesen User checken?
			});
		});
	}
	
	//TODO: in onInit verschieben?
	
	public editEmployee() : void {
	  this.employee.firstName = this.employeeForm.firstName.getValue();
	  this.employee.lastName = this.employeeForm.lastName.getValue();
	  this.employee.email = this.employeeForm.email.getValue();
	  this.employee.street = this.employeeForm.street.getValue();
	  this.employee.nr = this.employeeForm.nr.getValue();
	  this.employee.phoneNumber = this.employeeForm.phoneNumber.getValue();
	  this.eService.editEmployee(this.employee);
	}
}
