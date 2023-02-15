import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent {
  title = '';
  author = '';
  content = '';
  url = '';


  // function to get the value 
  getTitleValue(value: any) {
    this.title = value
  }


// function to get the value 
  getAuthorValue(value: any) {
    this.author = value
  }
  
// function to get the value 
  getContentValue(value: any) {
    this.content = value
  }

// function to upload image 
  uplodImage = async (event: any) => {
    const file = event.target.files[0];
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'ahmedmejdoub');
    await axios
      .post('https://api.cloudinary.com/v1_1/ddvyi3jpk/upload', form)
      .then((result) => {
        this.url = result.data.secure_url;
        console.log(this.url);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Injecting the Router service into the component
  constructor(private router: Router) {}

  
// function to add Blog
  addNewBlog() {
    axios
      .post(`http://localhost:5000/Blog/AddNewBlog`, {
        title: this.title,
        content: this.content,
        author: this.author,
        photo: this.url,
        upvote: 0,
        downvote: 0,
      })
      .catch((error) => {
        console.error(error);
      })
      .then(() => {
        setTimeout(() => {
          this.router.navigate(['/Allblogs']);
        }, 1000);
      });
  }
}
