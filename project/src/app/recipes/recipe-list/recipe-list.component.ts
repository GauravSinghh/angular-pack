import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected= new EventEmitter<Recipe>();
//  recipes: Recipe[]=[
 
//   new Recipe('Happy Meal', 'McDonalds Happy Meal', 'https://static.businessworld.in/article/article_extra_large_image/1639042538_xl3BuB_Udaipur_is_an_important_leisure_destination_in_North_India_and_we_are_excited_to_open_our_second_hotel_in_the_city_of_lakes_and_ninth_in_the_state_of_Rajasthan_with_our_popular_Howard_Johnson_by_Wyndham_brand_1_.jpg'),
//   new Recipe('Chicken Biryani', 'Muradabaadi Chicken Biryani', 'https://c.ndtvimg.com/2021-03/jlmiqp08_biryani-by-kilo_625x300_18_March_21.jpg')
 
// ];
recipes:Recipe[];

 constructor(private recipeService: RecipeService,
  private router:Router,
  private route:ActivatedRoute){}

 ngOnInit(): void {
   this.recipes=this.recipeService.getRecipe();
 }

 onNewRecipe(){
  this.router.navigate(['new'], {relativeTo:this.route});
 }

//  onRecipeSelected(recipe:Recipe){
//   this.recipeWasSelected.emit(recipe);
//  };

}
