import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<p>
      <strong>Counter: {{ counter }}</strong>
    </p>
    <button (click)="decrementBy()">-1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="incrementBy()">+1</button>`,
})
export class CounterComponent {
  private initialCounter: number = 10;
  public counter: number = this.initialCounter;

  incrementBy(value: number = 1): void {
    this.counter += value;
  }
  decrementBy(value: number = 1): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = this.initialCounter;
  }
}
