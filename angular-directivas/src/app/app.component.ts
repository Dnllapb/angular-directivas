import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directivas';
  muestras : string [] = [ 'Muestra 1',
  'Muestra 2',
  'Muestra 3',
  'Muestra 4',
  'Muestra 5',]
}
