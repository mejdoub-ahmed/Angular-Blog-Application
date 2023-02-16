// These classes are used to send and receive HTTP requests and responses.
import { HttpClient, HttpHeaders } from '@angular/common/http';

//is used to mark a class as a provider for Angular's dependency injection system.
import { Injectable } from '@angular/core';

//Observable is a class used to represent asynchronous streams of data.
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  //This property that sets the base URL for the REST API that the service will communicate with.
  baseurl = 'http://localhost:5000/Blog';
  cloudinaryUrl = 'https://api.cloudinary.com/v1_1/ddvyi3jpk/upload';
  constructor(private http: HttpClient) {}
  //  This is an object that defines the HTTP headers that will be sent with each request.
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllBlogs(): Observable<any> {
    return this.http.get(`${this.baseurl}/getAllBlogs`, this.httpOptions);
  }

getOneBlog(id:any){
  return this.http.get(`${this.baseurl}/getOneBlog/${id}`, this.httpOptions)
}



  addNewBlog(title: String, content: String, author: String, url: any) {
    return this.http.post(
      `${this.baseurl}/addNewBlog`,
      {
        title: title,
        content: content,
        author: author,
        photo: url,
        upvote: 0,
        downvote: 0,
      },
      
    );
  }

  uploadImage(file: File) {
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'ahmedmejdoub');
    return this.http.post(this.cloudinaryUrl, form);
  }

  upVoteBlog(element: any) {
    return this.http.put(
      `${this.baseurl}/upVoteBlog/${element._id}`,
      {
        upvote: element.upvote + 1,
      },
      this.httpOptions
    );
  }

  downVoteBlog(element: any) {
    return this.http.put(
      `${this.baseurl}/downVoteBlog/${element._id}`,
      {
        downvote: element.downvote + 1,
      },
      this.httpOptions
    );
  }


  searchBlog(value :any){
    return this.http.post(`${this.baseurl}/SearchBlog`,{
      text:value
    })
  }
}


