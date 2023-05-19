import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { RecipeItemComponent } from './recipe/item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe/item/details/recipe-details.component';
import { HeaderComponent } from './Header/header.component';
import { RecipeListComponent } from './recipe/recipe-list.component';
import { ShoppingListComponent } from './shopping/shopping-list.component';
import { ShoppingListEditorComponent } from './shopping/shopping-list-edit.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { Aufgabe5Component } from './aufgabe5/aufgabe5.component';
import { ActiveUsersComponent } from './aufgabe5/active-users/active-users.component';
import { InactiveUsersComponent } from './aufgabe5/inactive-users/inactive-users.component';
import { UserService } from './aufgabe5/shared/user-service.service';
import { CountingService } from './aufgabe5/shared/counting-service.service';
import { RecipeService } from './recipe/recipe-service.service';
import { ShoppingService } from './shopping/shopping-service.service';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeEditComponent } from './recipe/item/edit/recipe-edit-component.component';
import { AufgabenComponent } from './aufgaben/aufgaben.component';
import { EmptyRecipeComponent } from './recipe/item/empty-recipe/empty-recipe.component';

@NgModule({
	declarations: [
		AppComponent,
		WarningAlertComponent,
		SuccessAlertComponent,
		HeaderComponent,
		RecipeListComponent,
		ShoppingListComponent,
		ShoppingListEditorComponent,
		RecipeDetailsComponent,
		RecipeItemComponent,
		GameControlComponent,
		OddComponent,
		EvenComponent,
		Aufgabe5Component,
		ActiveUsersComponent,
		InactiveUsersComponent,
  AppHeaderComponent,
  RecipeEditComponent,
  AufgabenComponent,
  EmptyRecipeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [UserService, CountingService, RecipeService, ShoppingService],
	bootstrap: [AppComponent]
})
export class AppModule { }
