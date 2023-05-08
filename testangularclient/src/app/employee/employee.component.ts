import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EDataServiceService } from '../edata-service.service';
import { EmployeeData } from '../model/employee-data';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

	employee !: EmployeeData;
	
	constructor(private route : ActivatedRoute, private eService : EDataServiceService) {
		this.route.params.subscribe( params => {
			this.eService.findEmployee(params['id']).subscribe(data => {
				this.employee = data;
			});
		});
	}
}
