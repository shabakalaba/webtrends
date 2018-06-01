import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // <app-root></app-root>
  templateUrl: './app.component.html', // Can straight up code html in here, but its probably best to just stick with the template file as a master sheet
  styleUrls: ['./app.component.css'] // can add multiple css files
})
export class AppComponent {
  title : string = 'Week 3';
  subtitle : string = 'This is the subtitle.';
  altText : string = 'Angular Shield';
}
