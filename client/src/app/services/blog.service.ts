import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  baseurl = 'http://localhost:5000/Blog';
  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllBlogs(): Observable<any> {
    return this.http.get(`${this.baseurl}/GetAllBlogs`);
  }
  upVoteBlog() {}
  downVoteBlog() {}
  addBlog() {}
}
