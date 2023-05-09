import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EDataServiceService } from '../edata-service.service';
import { Employee } from '../model/employee';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
	  this.employee.firstName = this.employeeForm.get('firstName')!.value!;
	  this.employee.lastName = this.employeeForm.get('lastName')!.value!;
	  this.employee.email = this.employeeForm.get('email')!.value!;
	  this.employee.street = this.employeeForm.get('street')!.value!;
	  this.employee.nr = this.employeeForm.get('nr')!.value!;
	  this.employee.phoneNumber = this.employeeForm.get('phoneNumber')!.value!;
	  this.eService.editEmployee(this.employee);
	}
}
