import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isDisplayed = true;
  private buttonClicks: string[] = [];
  private counter: number = 0;

  public toggleDisplay() {
    this.isDisplayed = !this.isDisplayed;
    this.counter++;
    this.buttonClicks.push(`button clicked ${this.counter} times`);
  }
}
