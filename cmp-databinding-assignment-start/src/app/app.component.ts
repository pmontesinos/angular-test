import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isEven: boolean;
  currentSecond: number = 0;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameInterval(intervalData: {intervalSecond: number}) {
    this.currentSecond = intervalData.intervalSecond;
    if ( intervalData.intervalSecond % 2 === 0 ) {
      this.isEven = true;
      this.evenNumbers.push(intervalData.intervalSecond);
    } else {
      this.isEven = false;
      this.oddNumbers.push(intervalData.intervalSecond);
    }
  }
}
