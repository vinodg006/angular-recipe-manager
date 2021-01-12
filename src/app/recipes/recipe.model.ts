import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public name: string;
  public description: string;
  public imgPath: string;
  ingredients: Ingredient[];
  constructor(
    name: string,
    desc: string,
    imgPath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = desc;
    this.imgPath = imgPath;
    this.ingredients = ingredients;
  }
}
