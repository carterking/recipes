import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { TopNavComponent } from './shared/layout/top-nav/top-nav.component';
import { CategoriesService } from './shared/services/categories.service';
import { RecipeItemsService } from './shared/services/recipe-items.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    TopNavComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CategoriesService,
    RecipeItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
