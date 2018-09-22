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
    var eles = document.querySelectorAll('.nav-links a');

    for(var i = 0; i < eles.length; i++)
    {
      console.log(eles[i]);
      eles[i].classList.remove('active');
    }
    event.target.classList.add('active');

  }
  
}
