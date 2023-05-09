import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EDataServiceService } from '../edata-service.service';


@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
	
	private username : string;
	
	constructor(private router: Router) {
		
	}
	
	ngOnInit() : void {
	  //TODO: Authentication check jedes mal zum backend?
	  if (!localStorage.getItem('User')) {
	    this.router.navigate(['/501']);
	  } else {
	    username = localStorage.getItem('User');
	  }
	}
	
	public toProjects() : void {
	  this.router.navigate(['/pages/projects']);
	}
	
	public toEmployees() : void {
	  this.router.navigate(['/pages/employees']);
	}
	
	public toHome() : void {
	  this.router.navigate(['/pages/home']);
	}
}
