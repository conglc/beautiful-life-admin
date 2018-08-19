import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Article } from '../../../models/article';
import { ArticlesService } from '../../../service/articles.service';
import { CategoriesService } from '../../../Service/categories.service';
import { Category } from '../../../models/category';


@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {
  
  model = new Article();
  categories: Category[];

  constructor(
    private router: Router,
    private location: Location,
    private categoriesService: CategoriesService,
    private articlesService: ArticlesService
  ) { }

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

  save() {
    this.model.createdAt = new Date();
    this.articlesService.add(this.model).subscribe(response => {
      this.router.navigateByUrl('/articles');
    }, error => {
      console.log("Cannot add data");
    })
  }

  cancel() {
    this.location.back();
  }
}
