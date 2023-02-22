import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
recipeDetails:Recipe;
id:number;

 constructor(private recipeService: RecipeService, private route:ActivatedRoute, private router:Router){}

 ngOnInit(): void {
   this.route.params.subscribe(
    (param:Params)=>{
      this.id=+param['id'];
      this.recipeDetails=this.recipeService.getRecipee(this.id);
    }
   );
 }

 onAddToShoppingList(){
  this.recipeService.addIngToShoppingList(this.recipeDetails.ingredient);
 }

 onEditRecipe(){
  this.router.navigate(['edit'], {relativeTo:this.route});
  // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
 }
}
