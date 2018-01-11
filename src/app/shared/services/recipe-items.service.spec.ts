import { TestBed, inject } from '@angular/core/testing';

import { RecipeItemsService } from './recipe-items.service';

describe('RecipeItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeItemsService]
    });
  });

  it('should be created', inject([RecipeItemsService], (service: RecipeItemsService) => {
    expect(service).toBeTruthy();
  }));
});
