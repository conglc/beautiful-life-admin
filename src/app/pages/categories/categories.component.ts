import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category';
import { CategoriesService } from '../../Service/categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories: Category[];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getAll().subscribe(response => {
      this.categories = response;
    }, error => {
      console.log("Cannot get categories");
    });
  }

  delete(model: Category) {
    
    this.categoriesService.delete(model.id).subscribe(response => {
      this.categories = this.categories.filter(item => item !== model);
    }, error => {
      console.log("Cannot delete category");
    });
  }

}
