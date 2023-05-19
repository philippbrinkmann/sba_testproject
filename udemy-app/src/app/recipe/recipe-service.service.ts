import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping/shopping-service.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
    new Recipe(0, 'Gute Nudeln1', 'Richtig gute Nudeln mit stuff', 
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
    [new Ingredient('Nudeln', 1),
    new Ingredient('Sauce', 1)]),
    new Recipe(1, 'Gute Nudeln2', 'Richtig gute Nudeln mit stuff', 
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
    [new Ingredient('Sahne', 2),
    new Ingredient('Nudeln', 1),
    new Ingredient('Schinken', 3),
    new Ingredient('Paprika', 2)]),    
    new Recipe(2, 'Gute Nudeln3', 'Richtig gute Nudeln mit stuff', 
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
    [new Ingredient('Nudeln', 1),
    new Ingredient('Tomaten', 4),
    new Ingredient('Hack', 2)])];
    name: string = 'service1';


	constructor(private shoppingService: ShoppingService) {
		
	}
	
	addIngredientsToList(ingredients: Ingredient[]) {
		this.shoppingService.addIngredients(ingredients);
	}
	
	getRecipes() : Recipe[] {
		return this.recipes.slice();
	}
	
	getRecipe(id: number) : Recipe {
		let result: Recipe = null;
		this.recipes.forEach((recipe: Recipe) => {
			console.log('checking ' + recipe.id + id);
			if(recipe.id === +id) {
				console.log('found');
				result = recipe;
			}
		});
		// route to 404 page for recipe?
		return result;
	}
}