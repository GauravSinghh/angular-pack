import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs-compat';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit, OnDestroy{

  ingredients:Ingredients[];
  private igChangedSub:Subscription;

  constructor(private shoppingListService:ShoppingListService){}

  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredients();
    this.igChangedSub= this.shoppingListService.ingredientChanged.subscribe(
      (ingredients:Ingredients[])=>{
        this.ingredients=ingredients
      }
    )
  }
  // onIngredientAdded(ingredient: Ingredients){
  //   // this.ingredients.push(ingredient); 
  //   this.shoppingListService.onIngredientAdded(ingredient);
  // }

  ngOnDestroy(): void {
    this.igChangedSub.unsubscribe();
  }

}
