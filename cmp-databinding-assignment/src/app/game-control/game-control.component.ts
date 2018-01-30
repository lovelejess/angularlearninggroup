import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startEvent: EventEmitter<number> = new EventEmitter<number>();
  private startCounter = 0;
  private timerId = null;
  private isRunning = false;
  constructor() { }

  ngOnInit() {
  }

  public onStart() {
    if(!this.isRunning) {
      this.timerId = setInterval(() => this.emitEvent(), 1000);
      this.isRunning = true;
    }
  }

  public onStop() {
    clearInterval(this.timerId);
    this.isRunning = false;
  }

  private emitEvent() {
    this.startEvent.emit(this.startCounter ++);
  }
}
