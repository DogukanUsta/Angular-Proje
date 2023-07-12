import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'category-list.',
  templateUrl:'./category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {


categories: Category[];
selectedCategory: Category | null | undefined;
categoryRepository: CategoryRepository;

constructor() {
  this.categoryRepository = new CategoryRepository();
  this.categories = this.categoryRepository.getCategories();
}

displayAll = true;

selectCategory(category?: Category) {
  if (category) {
    this.selectedCategory = category;
    this.displayAll = false;
  }
else
   {
    this.selectedCategory = category;
    this.displayAll = true;
  }
}

}
