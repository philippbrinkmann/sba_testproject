import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit-component',
  templateUrl: './recipe-edit-component.component.html',
  styleUrls: ['./recipe-edit-component.component.css']
})
export class RecipeEditComponent implements OnInit {
	id: number;
	editMode: boolean;

	constructor(private route: ActivatedRoute) {
		
	}
	
	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = params['id'];
			this.editMode = params['id'] != null;
		});
	}
}
