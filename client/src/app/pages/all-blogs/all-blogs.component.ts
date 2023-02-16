import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css'],
})
export class AllBlogsComponent implements OnInit, AfterViewInit {
  //A property to store the first blog from the response data
  firstBlog: any;
  // A property to store the complete response data from the API call
  data: any;

  // Injecting the Router service into the component
  constructor(private router: Router, private service: BlogService) {}

  // ngOnInit is a lifecycle hook in Angular that is called after a component has been initialized. It is a method that is automatically executed by Angular once the component is read
  ngOnInit() {}

  ngAfterViewInit(): void {
    this.fetchAllBlogs();
  }
  
 // function to gets all Blogs
  fetchAllBlogs() {
    this.service.getAllBlogs().subscribe((response: any) => {
      this.firstBlog = response[0];
      this.data = response?.slice(1);
    });
  }

  // A method to handle the navigation to the Blog Detail component, using the id of the blog
  viewDetails(id: string) {
    this.router.navigate(['/Blog', id]);
  }

  // function to update the number of upvote number
  upVoteBlog(element: any) {
    this.service.upVoteBlog(element).subscribe(
      () => {
        this.fetchAllBlogs();
      },
      (error) => {
        console.error(error);
      }
    );
  }
// function to update the number of downvote number
  downVoteBlog(element: any) {
    this.service.downVoteBlog(element).subscribe(
      () => {
        this.fetchAllBlogs();
      },
      (error) => {
        console.error(error);
      }
    );
  }

// function to render the border of blog according to the number of votes
  renderBorderElement = (element:any) => {
    return {
      border: `2px solid ${
        element.upvote >= element.downvote ? "green" : "red"
      }`,
    };
  };

}
