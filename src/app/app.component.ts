import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';
  angularVersion : string;
  constructor(){
    this.angularVersion = VERSION.full;
  }
}
