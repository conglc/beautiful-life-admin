import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleAddComponent } from './pages/articles/article-add/article-add.component';
import { ArticleEditComponent } from './pages/articles/article-edit/article-edit.component';
import { CategoryAddComponent } from './pages/categories/category-add/category-add.component';
import { CategoryEditComponent } from './pages/categories/category-edit/category-edit.component';
import { LoginComponent } from './pages/login/login.component';

import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'dashboard',  
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  }, 
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },         
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categories/add',
    component: CategoryAddComponent,
    canActivate: [AuthGuard]
  },  
  {
    path: 'categories/edit/:id',
    component: CategoryEditComponent,
    canActivate: [AuthGuard]
  },  
  {
    path: 'articles',
    component: ArticlesComponent,
    canActivate: [AuthGuard]
  },  
  {
    path: 'articles/add',
    component: ArticleAddComponent,
    canActivate: [AuthGuard]
  },  
  {
    path: 'articles/edit/:id',
    component: ArticleEditComponent,
    canActivate: [AuthGuard]
  },  
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  }, 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
