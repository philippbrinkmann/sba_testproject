import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-aufgaben',
  templateUrl: './aufgaben.component.html',
  styleUrls: ['./aufgaben.component.css']
})
export class AufgabenComponent implements OnInit {
	selectedComponent: number = 0;
	username: string = '';
	details: boolean = false;
	clicks: number[];
	numbers: number[];
	shown: string;
	
	constructor(private route: ActivatedRoute) {
		this.clicks = [];
		this.numbers = [];
	}
	
	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.selectedComponent = +params['id'] + 1;
		});
	}

	onResetUsername(): void {
		this.username = '';
	}

	onDetails(): void {
		this.details = !this.details;
		this.clicks.push(this.clicks.length + 1);
	}

	onInterval(emittedNumber: { result: number }) {
		this.numbers.push(emittedNumber.result);
	}

	onSelectFeature(navigation: string) {
		this.shown = navigation;
	}
}
