import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // selector: '#app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Home Page';
  title = 'Page';

/*
 public getTitle (): string {
  return this.title;

 }
*/
 getTitle (): string {
  return this.title;

 }

}