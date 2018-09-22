import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  code = ` <div class="form-wrapper">
  <div class="span6 input-wrapper">
      <label for="">First Name</label>
      <input type="text" placeholder="placeholder">
  </div>
  <div class="span6 input-wrapper">
          <label for="">Last Name</label>
          <input type="text" placeholder="placeholder">
  </div>
  <div class="span6 input-wrapper">
          <label for="">Email</label>
          <input type="email" placeholder="placeholder">
  </div>
  <div class="span6 input-wrapper">
          <label for="">Mobile</label>
          <input type="number" placeholder="placeholder">
  </div>
  <div class="span6 input-wrapper">
          <label for="">Password</label>
          <input type="password" placeholder="placeholder">
  </div>
  <div class="span6 input-wrapper">
          <label for="">Confirm Password</label>
          <input type="password" placeholder="placeholder">
  </div>
</div>`;

  constructor() { }

  ngOnInit() {
  }

  response: HighlightResult;


  onHighlight(e) {
    this.response = {
      language: e.language,
      r: e.r,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }

  
}
