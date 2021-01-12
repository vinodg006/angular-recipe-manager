import { Component, Input, OnInit } from "@angular/core";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  addToShoppingList() {
    this.recipeService.addIngredients(this.recipe.ingredients);
  }
}
