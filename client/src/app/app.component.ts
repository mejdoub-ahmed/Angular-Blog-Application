import { Component } from '@angular/core';

// Decorator function that adds metadata to the component
@Component({
  selector: 'app-root', // the selector that identifies this component in a template
  templateUrl: './app.component.html', // the path to the component's HTML template file
  styleUrls: ['./app.component.css'] // the path(s) to the component's CSS stylesheet file(s)
})


export class AppComponent {
  title = 'my-blog-app'; 
}
