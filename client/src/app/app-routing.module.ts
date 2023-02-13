// This is the AppRoutingModule that defines the routing configuration for the Angular application

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AllBlogsComponent } from './Components/all-blogs/all-blogs.component';
import { AddBlogComponent } from './Components/add-blog/add-blog.component';
import { BlogDetailComponent } from './Components/blog-detail/blog-detail.component';

//The routes constant is an array of objects, each object defines a single route in the application.
const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: "full"  },
  { path: 'Allblogs', component: AllBlogsComponent },
  //The :_id is a URL parameter and can be accessed within the component using the ActivatedRoute service.
  { path:'Blog/:_id', component: BlogDetailComponent },
  { path: 'Addblog', component: AddBlogComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

