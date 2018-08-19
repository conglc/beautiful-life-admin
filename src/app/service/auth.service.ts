import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthModel } from '../models/auth.model';
import { LoginModel } from '../models/login.model';



const jwtHelper = new JwtHelperService();

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(model: LoginModel): Observable<AuthModel> {
    var url = this.baseUrl + "/auth";
    return this.http.post<AuthModel>(url, model, httpOptions);
  }



  loggedIn() {
    var token = localStorage.getItem('token');
    if (!token)
      return false;
      
    return !jwtHelper.isTokenExpired(token);
  }

}
