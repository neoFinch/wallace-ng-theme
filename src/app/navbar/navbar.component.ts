import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor() { }
  expanded = 1;

  collapseAside():void{
    if(this.expanded){
      this.expanded = 0;
      var routerOutlet = document.querySelector('router-outlet');
      var aside = document.querySelector('aside');
      var main = <HTMLElement> document.querySelector('main');
      var nav = document.getElementById('navbar');
      aside.style.display = "none";
      var nextElem = <HTMLElement>routerOutlet.nextSibling;
      nextElem.style.setProperty('grid-column','1/-1');
      nav.style.setProperty('grid-column','1/-1');
      // nav.style.gridColumn= "1/-1";
    }else{
      this.expanded = 1;
      var routerOutlet = document.querySelector('router-outlet');
      var aside = document.querySelector('aside');
      var main  = <HTMLElement>document.querySelector('main');
      var nav = document.getElementById('navbar');
      aside.style.display = "block";
      var nextElem = <HTMLElement>routerOutlet.nextSibling;

      nextElem.style.setProperty('grid-column','3/-1');
      nav.style.setProperty('grid-column','3/-1');
    }
  }

}
