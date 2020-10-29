import { Recipe } from './recipe.model';

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('Test Recipe name','Just a test description','https://images.unsplash.com/photo-1590701390714-e979c0ccdd1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'),
        new Recipe('Another Test Recipe name','Just a test description','https://images.unsplash.com/photo-1590701390714-e979c0ccdd1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')
      ]; 
getRecipes(){
return this.recipes.slice();
}
}