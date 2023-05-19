import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	aufgaben = ['Aufgabe 1',
	'Aufgabe 2',
	'Aufgabe 3',
	'Aufgabe 4',
	'Aufgabe 5'];
}