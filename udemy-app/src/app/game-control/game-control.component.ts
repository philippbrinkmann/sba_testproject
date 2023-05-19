import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
	@Input() interval;
	@Output() outputInterval = new EventEmitter<{result: number}>();
	lastNumber : number;

	constructor() {
		this.lastNumber = 0;
	}
	
	onStartGame() {
		this.interval = setInterval(() => {
			this.lastNumber++;
			this.outputInterval.emit({result: this.lastNumber});
		}, 1000);
	}
	
	onStopGame() {
		clearInterval(this.interval);
	}
}
