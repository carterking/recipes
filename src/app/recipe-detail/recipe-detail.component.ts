import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RecipeItemsService } from '../shared/services/recipe-items.service';
import { RecipeItem } from '../shared/interfaces/recipe-item';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private recipeService: RecipeItemsService) { }
  currentRecipeItem: RecipeItem;
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id: number = +params['id'];
        this.getDetail(id);
      }
    });
  }
  getDetail(id: number) {
    this.recipeService.getRecipeItemById(id).then(( recipeItem: RecipeItem ) => {
      this.currentRecipeItem = recipeItem;
    });
  }
}
