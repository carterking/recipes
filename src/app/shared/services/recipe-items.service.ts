import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { RecipeItem } from '../interfaces/recipe-item';

@Injectable()
export class RecipeItemsService {

  constructor(private http: Http) {
  }


  public getRecipeItems(): Promise<Array<RecipeItem>> {

    const url = './assets/json/recipes.json';
    return this.http.get(url).toPromise().then(this.extractData);

  }

public getRecipeItemById(id: number): Promise<RecipeItem> {
 return this.getRecipeItems().then((recipeItems: RecipeItem[]) => {
   return recipeItems.find(x => x.id === id);
 });
}

private extractData(res: Response) {
  let body = res.json();
    return body;
}

}
