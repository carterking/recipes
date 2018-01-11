import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable()
export class CategoriesService {

  constructor() { }

  public getCategories(): Array<Category> {
    return [
      {
        id: 1,
        name: 'Protein'
      }
      ,
      {
        id: 2,
        name: 'Side'
      }
    ];
  }
}
