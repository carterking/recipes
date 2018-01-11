import { Component, OnInit } from '@angular/core';
import { RecipeItem } from '../shared/interfaces/recipe-item';
import { CategoriesService } from '../shared/services/categories.service';
import { Category } from '../shared/interfaces/category';
import { RecipeItemsService } from '../shared/services/recipe-items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipeItem: RecipeItem = {
    id: 1,
    carbs: 0,
    category: 'Protein',
    link: 'http://cbi.as/a1gpt',
    name: 'Taco Meat',
    sugar: 0,
    protein: 22,
    description: 'Grass-fed ground beef with a bit of cajun seasoning',
    thumbnail: './assets/images/taco-meat.jpg',
  };

  recipeItems: RecipeItem[] = [];

  constructor(private catService: CategoriesService, private recService: RecipeItemsService, private router: Router) { 

  }

  goToDetail(id: number) {
    const link = ['/detail, id'];
    this.router.navigate(link);
  }

  ngOnInit() {
    // this.recipeItems.push(this.recipeItem);
    // this.recipeItems.push(this.recipeItem);
    // this.recipeItems.push(this.recipeItem);

    const x: Array<Category> = this.catService.getCategories();

    this.recService.getRecipeItems().then((r: Array<RecipeItem>) => {
      this.recipeItems = r;

    });


  }

}
