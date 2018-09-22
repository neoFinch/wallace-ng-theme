import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-elements',
  templateUrl: './ui-elements.component.html',
  styleUrls: ['./ui-elements.component.css']
})
export class UiElementsComponent  {

  buttonsCode = `
  <button class="mat-btn">
  Default
  </button>
  
  <button class="mat-btn success">
  Success
  </button>
  
  <button class="mat-btn info">
  Info
  </button>
  
  <button class="mat-btn warning">
  Warning
  </button>
  
  <button class="mat-btn danger">
  Danger
  </button>
  `;

}
