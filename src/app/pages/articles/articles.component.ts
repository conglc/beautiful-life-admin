import { Component, OnInit } from '@angular/core';

import { Article } from '../../models/article';
import { ArticlesService } from '../../service/articles.service';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public articles: Article[];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articlesService.getAll().subscribe(response => {
      this.articles = response;
    }, error => {
      console.log("Cannot get articles");
    });
  }
  delete(model: Article) {
    
    this.articlesService.delete(model.id).subscribe(response => {
      this.articles = this.articles.filter(item => item !== model);
    }, error => {
      console.log("Cannot delete category");
    });
  }

}

