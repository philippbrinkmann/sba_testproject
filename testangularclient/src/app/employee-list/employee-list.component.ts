import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EDataServiceService } from '../edata-service.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
	employees !: Employee[];
	
	constructor(private router : Router, private eService : EDataServiceService) {
		
	}
	
	ngOnInit(): void {
    	this.eService.findAll().subscribe(data => {
			this.employees = data;
			console.log("Found " + data.length + " employee entries.");
		});
	}
	
	public showUser(id : string) {
		this.router.navigate(['/employee/' + id]);
	}
}
