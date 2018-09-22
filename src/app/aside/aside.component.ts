import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addActive(event) {
    document.querySelectorAll('.nav-links a').forEach(function(ele) {
      console.log("e",ele);
      ele.classList.remove('active');
    })
    event.target.classList.add('active');

  }
  
}
