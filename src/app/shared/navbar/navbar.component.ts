import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';

import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private listTitles: any[];
  location: Location;
  private nativeElement: Node;
  private toggleButton;
  private sidebarVisible: boolean;

  @ViewChild("app-navbar") button;

  constructor(
      location:Location, 
      private renderer : Renderer, 
      private element : ElementRef,
      private router: Router
    ) {
    this.location = location;
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
  }

  ngOnInit(){
      this.listTitles = ROUTES.filter(listTitle => listTitle);            
  }
  getTitle(){
      var titlee = window.location.pathname;
      titlee = titlee.substring(1);
      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
  }

  logout() {
      localStorage.removeItem('token');
      this.router.navigateByUrl('/login');
  }

}
