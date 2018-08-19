import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { HashLocationStrategy, LocationStrategy } from '@angular/common'; 

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

// Shared
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

// Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleAddComponent } from './pages/articles/article-add/article-add.component';
import { ArticleEditComponent } from './pages/articles/article-edit/article-edit.component';
import { CategoryAddComponent } from './pages/categories/category-add/category-add.component';
import { CategoryEditComponent } from './pages/categories/category-edit/category-edit.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,  
    UserComponent,
    FooterComponent,
    NavbarComponent,
    CategoriesComponent,
    ArticlesComponent,
    ArticleAddComponent,
    ArticleEditComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
