import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent {
  oneBlog: any;

  // The class has a constructor that accepts an instance of ActivatedRoute as an argument and is used to access information about a route associated with a component loaded in an outlet
  constructor(private route: ActivatedRoute) {}


  // The this.route.params.subscribe: line of code is using Angular's ActivatedRoute service to subscribe(partage) to changes in the route parameters.
  ngOnInit() {
    //The subscribe method takes an anonymous function as an argument which receives the params object. This object contains the parameters that were passed in the route. 
    this.route.params.subscribe(params => {
      // extracts the value of the _id parameter and assigns it to a variable id.
      const id = params['_id'];
      axios.get(`http://localhost:5000/Blog/GetOneBlog/${id}`).then((res) => {
        this.oneBlog = res.data;
      });
    });
  }
}