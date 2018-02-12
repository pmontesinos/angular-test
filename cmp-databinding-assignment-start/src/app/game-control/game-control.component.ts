import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  currentSecond: number = 0;
  intervalId: number;
  @Output() gameTime = new EventEmitter<{intervalSecond: number}>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.intervalId = setInterval(() => {
      this.currentSecond++;
      this.gameTime.emit({
        intervalSecond: this.currentSecond
      })
    }, 1000);
  }

  onEndGame() {
    clearInterval(this.intervalId);
  }

}
