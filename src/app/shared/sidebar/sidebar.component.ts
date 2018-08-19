import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
  { path: 'categories', title: 'Categories',  icon:'ti-dribbble', class: '' },
  { path: 'articles', title: 'Articles',  icon:'ti-pencil-alt2', class: '' },
  { path: 'user', title: 'User Profile',  icon:'ti-user', class: '' },  
  { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];

  constructor() { }

  ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

  isNotMobileMenu(){
      if($(window).width() > 991){
          return false;
      }
      return true;
  }

}
