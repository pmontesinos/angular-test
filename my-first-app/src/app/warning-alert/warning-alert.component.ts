import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <p>This is a warning alert!</p>
  `,
  styles: [`
    p {
      background-color: red;
      color: white;
      padding: 5px;
      margin: 2px;
    }
  `]
})
export class WarningAlertComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
