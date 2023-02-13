import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css'],
})
export class AllBlogsComponent {
  //A property to store the first blog from the response data
  firstBlog: any;
  // A property to store the complete response data from the API call
  data: any;

  // ngOnInit is a lifecycle hook in Angular that is called after a component has been initialized. It is a method that is automatically executed by Angular once the component is read
  ngOnInit() {
    this.fetchAllBlogs();
  }

  fetchAllBlogs() {
    axios.get('http://localhost:5000/Blog/GetAllBlogs').then((res) => {
      // Assigning response data to the 'firstBlog' property
      this.firstBlog = res.data[0];
      this.data = res.data.slice(1);
    });
  }

  // Injecting the Router service into the component
  constructor(private router: Router) {}

  // A method to handle the navigation to the Blog Detail component, using the id of the blog
  viewDetails(id: string) {
    this.router.navigate(['/Blog', id]);
  }

  upVoteBlog(element: any) {
    axios
      .put(`http://localhost:5000/Blog/UpVoteBlog/${element._id}`, {
        upvote: element.upvote + 1,
      })
      .then(() => {
        this.fetchAllBlogs();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  downVoteBlog(item: any) {
    axios
      .put(`http://localhost:5000/Blog/UpVoteBlog/${item._id}`, {
        downvote: item.downvote +1,
      })
      .then(() => {
        this.fetchAllBlogs();
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
