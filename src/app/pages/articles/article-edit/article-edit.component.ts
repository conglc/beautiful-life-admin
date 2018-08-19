import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Article } from '../../../models/article';
import { ArticlesService } from '../../../service/articles.service';
import { Category } from '../../../models/category';
import { CategoriesService } from '../../../Service/categories.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  model = new Article();
  categories: Category[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
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
      this.getArticle();
    }, error => {
      console.log("Cannot get categories");
    });
  }

  getArticle() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articlesService.getById(id).subscribe(response => {
      this.model = response;      
    }, error => {
      console.log("Error");
    });
  }

  save() {
    this.articlesService.update(this.model).subscribe(response => {
      this.router.navigateByUrl('/articles');
    }, error => {
      console.log("Cannot update data");
    })
  }

  cancel() {
    this.location.back();
  }
}