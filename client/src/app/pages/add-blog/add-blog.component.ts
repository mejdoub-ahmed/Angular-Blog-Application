import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent {
  title = '';
  errorTitle = '';

  author = '';
  errorAuthor = '';

  content = '';
  errorContent = '';

  url = '';
  submitBlog = false;
  submitPicture = false;




  // Injecting the Router service into the component
  constructor(private router: Router, private service: BlogService) {}

  // function to get the value
  getTitleValue(value: any) {
    this.title = value;
  }

  // function to get the value
  getAuthorValue(value: any) {
    this.author = value;
  }

  // function to get the value
  getContentValue(value: any) {
    this.content = value;
  }

  // function to upload image
  uploadImage(event: any) {
    const file = event.target.files[0];
    this.submitPicture = true;
    this.service.uploadImage(file).subscribe(
      (result: any) => {
        this.url = result.secure_url;
        console.log(this.url);
        this.submitPicture = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }
// function to add a new blog
  addNewBlog() {
    if (this.title.trim() === '')   this.errorTitle = 'Title cannot be empty'
    if (this.author.trim() === '')  this.errorAuthor = 'Author cannot be empty' 
    if (this.content.trim() === '')  return this.errorContent = 'Content cannot be empty' 
    else {
      return this.service
        .addNewBlog(this.title, this.content, this.author, this.url)
        .subscribe(
          () => {
            this.submitBlog = true;
            setTimeout(() => {
              this.router.navigate(['']);
            }, 2000);
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }
// function to clean error 
    clearError() {
    if (this.errorTitle) {
      this.errorTitle = '';
    }
  }
}
