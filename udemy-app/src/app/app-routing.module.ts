import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AufgabenComponent } from "./aufgaben/aufgaben.component";
import { RecipeDetailsComponent } from "./recipe/item/details/recipe-details.component";
import { RecipeEditComponent } from "./recipe/item/edit/recipe-edit-component.component";
import { EmptyRecipeComponent } from "./recipe/item/empty-recipe/empty-recipe.component";
import { RecipeListComponent } from "./recipe/recipe-list.component";
import { ShoppingListComponent } from "./shopping/shopping-list.component";

const routes = [
	{ path: 'aufgaben/:id', component: AufgabenComponent },
	{
		path: 'recipes', component: RecipeListComponent, children: [
			{ path: ':id/details', component: RecipeDetailsComponent },
			{ path: ':id/edit', component: RecipeEditComponent },
			{ path: 'new', component: RecipeEditComponent },
			{ path: '**', component: EmptyRecipeComponent }
		]
	},
	{ path: 'shopping', component: ShoppingListComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }