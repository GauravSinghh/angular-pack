
import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredient.model";

export class ShoppingListService{

    ingredientChanged=new Subject<Ingredients[]>();

    private ingredients=[
        new Ingredients("apple ",4), 
        new Ingredients("Kiwi", 5)
      ];

    getIngredients(){
        return this.ingredients.slice();    
    }  


      onIngredientAdded(ingredient: Ingredients){
        this.ingredients.push(ingredient); 
        this.ingredientChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients:Ingredients[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
      }
}