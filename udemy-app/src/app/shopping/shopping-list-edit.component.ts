import { Component, OnInit, ViewChild } from '@angular/core'; 
import { ShoppingService } from './shopping-service.service';

@Component ({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditorComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInput;
  @ViewChild('amountInput', {static: false}) amountInput;
  
  constructor(private shoppingService: ShoppingService) {
	  
  }
  
  ngOnInit() {
	  this.shoppingService.selectedIngredient.subscribe((ingredient) => {
		  this.nameInput.nativeElement.value = ingredient.name;
		  this.amountInput.nativeElement.value = ingredient.amount;
	  });
  }
  
  onAddIngredient() {
	  this.shoppingService.addIngredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
	  this.onClearInput();
  }
  
  onClearInput() {
	  this.nameInput.nativeElement.value = '';
	  this.amountInput.nativeElement.value = null;
  }
  
  onRemoveIngredient() {
	  this.shoppingService.removeIngredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
	  this.onClearInput();
  }
}