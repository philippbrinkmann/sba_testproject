import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService {
	private ingredients: Ingredient[] = [new Ingredient('Apple', 2), new Ingredient('Banana', 10)];
	ingredientsChanged = new EventEmitter<Ingredient[]>();
	selectedIngredient = new EventEmitter<Ingredient>();

	constructor() {
	}
	
	addIngredient(name: string, amount: number) {
		this.addAndGroup(name, amount);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	addAndGroup(name: string, amount: number) {
		var found = false;
		this.ingredients.forEach((ingredient) => {
			if (ingredient.name === name) {
				ingredient.amount = +ingredient.amount + +amount;
				found = true;
			}
		});
		if (!found) {
			this.ingredients.push(new Ingredient(name, amount));
		}
	}
	
	addIngredients(ingredients: Ingredient[]) {
		for(let ingredient of ingredients) {
			this.addAndGroup(ingredient.name, ingredient.amount);
		}
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	getIngredients(): Ingredient[] {
		return this.ingredients.slice();
	}

	removeIngredient(name: string, amount: number) {
		var found = false;
		this.ingredients.forEach((ingredient) => {
			if (!found && ingredient.name === name) {
				if (+ingredient.amount > +amount) {
					ingredient.amount = +ingredient.amount - +amount;
				} else {
					this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
				}
				this.ingredientsChanged.emit(this.ingredients.slice());
			}
		});
	}
}