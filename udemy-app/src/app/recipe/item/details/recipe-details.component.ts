import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../../recipe-service.service';
import { Recipe } from '../../recipe.model';

@Component ({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
  }
  
  ngOnInit() {
	  this.recipe = this.recipeService.getRecipe(this.route.snapshot.params['id']);
	  this.route.params.subscribe((params: Params) => {
		  this.recipe = this.recipeService.getRecipe(params['id']);
	  });
  }
  
  onToShoppingList() {
	  this.recipeService.addIngredientsToList(this.recipe.ingredients);
  }
}