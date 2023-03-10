import { Component, ElementRef, ViewChild,EventEmitter,Output } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput' , {static:true} ) nameInputRef: ElementRef;
  @ViewChild('amountInput' , {static:true} ) amountInputRef: ElementRef;

constructor(private shoppingListService: ShoppingListService){}

  onAddItem(){
    const ingName= this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredients(ingName,ingAmount);
    this.shoppingListService.onIngredientAdded(newIngredient);

  }

}
