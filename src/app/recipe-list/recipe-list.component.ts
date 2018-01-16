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
    isLowCarb: true,
    category: 'Protein',
    link: 'http://cbi.as/a1gpt',
    name: 'Taco Meat',
    description: 'Grass-fed ground beef with a bit of cajun seasoning',
    thumbnail: './assets/images/taco-meat.jpg',
  };

  recipeItems: RecipeItem[] = [];
  allRecipeItems: RecipeItem[] = [];

  filterProp: String = 'name';
  filterDirection: String = 'asc';
  searchTerm: String = '';

  constructor(private catService: CategoriesService, private recService: RecipeItemsService, private router: Router) {

  }

  goToDetail(id: number) {
    const link = ['/detail', id];
    this.router.navigate(link);
  }

  ngOnInit() {
    // this.recipeItems.push(this.recipeItem);
    // this.recipeItems.push(this.recipeItem);
    // this.recipeItems.push(this.recipeItem);

    const x: Array<Category> = this.catService.getCategories();

    this.recService.getRecipeItems().then((r: Array<RecipeItem>) => {
      this.allRecipeItems = r;
      this.recipeItems = this.allRecipeItems;
      this.sort();
    });

  }
  sort() {
    const direction = (this.filterDirection === 'asc') ? 1 : -1;

    this.recipeItems.sort((a, b) => {
      if (a[this.filterProp] < b[this.filterProp]) {
        return -1 * direction;
      } else if (a[this.filterProp] > b[this.filterProp]) {
        return 1 * direction;
      } else {
        return 0;
      }
    });


  }

  searchMenu() {
    const searchProps: String[] = ['name', 'description'];
    const lowerTerm = this.searchTerm.toLowerCase();

    this.recipeItems = this.allRecipeItems.filter(x => {
      let found = false;

      searchProps.forEach( y => {
        const tempTerm = x[y].toLowerCase();
        if (tempTerm.indexOf(lowerTerm) > -1) {
          found = true;
        }
      });

      return found;

    });
  }

}
