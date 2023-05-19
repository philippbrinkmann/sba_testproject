import { Component, OnInit } from '@angular/core';

import { Ingredient} from '../shared/ingredient.model';
import { ShoppingService } from './shopping-service.service';

@Component ({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  
  constructor(private shoppingService: ShoppingService) {
    
  }
  
  ngOnInit() {
	  this.ingredients = this.shoppingService.getIngredients();
	  this.shoppingService.ingredientsChanged.subscribe((ingredients) => {
		  this.ingredients = ingredients;
	  });
  }
  
  onSelectIngredient(ingredient: Ingredient) {
	  this.shoppingService.selectedIngredient.emit(ingredient);
  }
}