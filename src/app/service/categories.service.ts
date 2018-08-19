import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment'

import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    var url = this.baseUrl + '/categories';
    return this.http.get<Category[]>(url, this.httpOptions());
  }

  getById(id: number) : Observable<Category> {
    var url = this.baseUrl + '/categories/' + id;
    console.log(this.httpOptions());
    return this.http.get<Category>(url, this.httpOptions());
  }

  add(category: Category) : Observable<Category> {
    var url = this.baseUrl + '/categories';
    return this.http.post<Category>(url, category, this.httpOptions());
  }

  update(category: Category) : Observable<Category> {
    var url = this.baseUrl + '/categories/' + category.id;
    return this.http.put<Category>(url, category, this.httpOptions());
  }

  delete(id: number) : Observable<Category> {
    var url = this.baseUrl + '/categories/' + id;
    return this.http.delete<Category>(url, this.httpOptions());
  }

  httpOptions() {    
    //var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token});    
    var headers = new HttpHeaders({ 'Content-Type': 'application/json'});    
    
    return { headers: headers };
  };
}
