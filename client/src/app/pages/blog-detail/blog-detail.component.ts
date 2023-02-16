import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  oneBlog: any;

  // The class has a constructor that accepts an instance of ActivatedRoute as an argument and is used to access information about a route associated with a component loaded in an outlet
  constructor(private route: ActivatedRoute, private service: BlogService) {}


   ngOnInit() {
    this.fetchOneBlog() 
    }

    // The this.route.params.subscribe: line of code is using Angular's ActivatedRoute service to subscribe(partage) to changes in the route parameters.
    
  fetchOneBlog() {
    this.route.params.subscribe((params) => {
      // extracts the value of the _id parameter and assigns it to a variable id.
      const id = params['_id'];
      this.service.getOneBlog(id).subscribe((result) => {
        this.oneBlog = result;
      });
    });
  }
}
