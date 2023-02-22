import {  Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipeService{


    private recipes: Recipe[]=[
 
        new Recipe(
            'Happy Meal', 
            'McDonalds Happy Meal', 
            'https://static.businessworld.in/article/article_extra_large_image/1639042538_xl3BuB_Udaipur_is_an_important_leisure_destination_in_North_India_and_we_are_excited_to_open_our_second_hotel_in_the_city_of_lakes_and_ninth_in_the_state_of_Rajasthan_with_our_popular_Howard_Johnson_by_Wyndham_brand_1_.jpg',
            [
                new Ingredients(
                    'Fries',20
                ),
                new Ingredients('McPuff',1)
            ]
            ),
        new Recipe(
            'Chicken Biryani', 
            'Muradabaadi Chicken Biryani', 
            'https://c.ndtvimg.com/2021-03/jlmiqp08_biryani-by-kilo_625x300_18_March_21.jpg',
            [
                new Ingredients(
                    'Rice',2
                ),
                new Ingredients('Chicken',1)
            ]
            )
       
      ];

      constructor(private shoppingList:ShoppingListService){}
      getRecipe(){
        return this.recipes.slice();
      }

      getRecipee(index:number){
        return this.recipes[index];
      }

    addIngToShoppingList(ingredients:Ingredients[]){
        this.shoppingList.addIngredients(ingredients);
    }  

}