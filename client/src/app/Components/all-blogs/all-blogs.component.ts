import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
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

  constructor(private router: Router, private service: BlogService) {}

  // ngOnInit is a lifecycle hook in Angular that is called after a component has been initialized. It is a method that is automatically executed by Angular once the component is read
  ngOnInit() {}

  ngAfterViewInit(): void {
    this.fetchAllBlogs();
  }

  fetchAllBlogs() {
    this.service.getAllBlogs().subscribe((response: any) => {
      this.firstBlog = response[0];
      this.data = response?.slice(1);
    });
  }

  // Injecting the Router service into the component

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
    if (item != 0) {
      axios
        .put(`http://localhost:5000/Blog/DownVoteBlog/${item._id}`, {
          downvote: item.downvote + 1,
        })
        .then(() => {
          this.fetchAllBlogs();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
}
