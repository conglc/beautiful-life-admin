import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  baseUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Article[]> {
    var url = this.baseUrl + '/articles';
    return this.http.get<Article[]>(url, this.httpOptions());
  }

  getById(id: number) : Observable<Article> {
    var url = this.baseUrl + '/articles/' + id;
    console.log(this.httpOptions());
    return this.http.get<Article>(url, this.httpOptions());
  }

  add(article: Article) : Observable<Article> {
    var url = this.baseUrl + '/articles';
    return this.http.post<Article>(url, article, this.httpOptions());
  }

  update(article: Article) : Observable<Article> {
    var url = this.baseUrl + '/articles/' + article.id;
    return this.http.put<Article>(url, article, this.httpOptions());
  }

  delete(id: number) : Observable<Article> {
    var url = this.baseUrl + '/articles/' + id;
    return this.http.delete<Article>(url, this.httpOptions());
  }

  httpOptions() {    
    //var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token});    
    var headers = new HttpHeaders({ 'Content-Type': 'application/json'});    
    
    return { headers: headers };
  };
}
