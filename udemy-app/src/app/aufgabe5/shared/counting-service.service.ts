import { Injectable } from "@angular/core";

@Injectable() 
export class CountingService {
	switches: number = 0;
	
	addSwitch() {
		this.switches++;
		console.log('New switch detected. This was switch ' + this.switches);
	}
}