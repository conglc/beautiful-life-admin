import { Router, NavigationEnd } from '@angular/router'
import { Component } from '@angular/core';
import { OnInit}     from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app';  
  isLoggedIn: boolean = false;

ngOnInit(){
  this.router.events.subscribe((e) => {
    if (e instanceof NavigationEnd) {
      let urlSlice = e.url.toString();
      if(urlSlice.indexOf('login')!==-1){   
        this.isLoggedIn= false;
      }
      else{
        this.isLoggedIn= true;      }
      }
  });
}
constructor(
    private router:Router
  ){};
}
