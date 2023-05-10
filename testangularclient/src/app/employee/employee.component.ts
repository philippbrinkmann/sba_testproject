import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EDataServiceService } from '../edata-service.service';
import { EmployeeData } from '../model/employee-data';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

	employee !: EmployeeData;
	employeeForm = this.formBuilder.group({
	  firstName: '',
	  lastName: '',
	  email: '',
	  street: '',
	  nr: '',
	  phoneNumber: ''
	});
	
	constructor(private route : ActivatedRoute, private eService : EDataServiceService, private formBuilder : FormBuilder) {
	}
	
	ngOnInit() : void {
		this.route.params.subscribe( params => {
			this.eService.findEmployee(params['id']).subscribe(data => {
				this.employee = data;
			});
		});
	}
	
	public editEmployee() : void {
	  console.info("Employee edited ", this.employeeForm.value);
	  this.employee.employee.firstName = this.employeeForm.get('firstName')!.value!;
	  this.employee.employee.lastName = this.employeeForm.get('lastName')!.value!;
	  this.employee.employee.email = this.employeeForm.get('email')!.value!;
	  this.employee.employee.street = this.employeeForm.get('street')!.value!;
	  this.employee.employee.nr = this.employeeForm.get('nr')!.value!;
	  this.employee.employee.phoneNumber = this.employeeForm.get('phoneNumber')!.value!;
	  console.info(this.employee.employee);
	  this.eService.editEmployee(this.employee.employee);
	}
}
