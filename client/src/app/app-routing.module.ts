// This is the AppRoutingModule that defines the routing configuration for the Angular application

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AllBlogsComponent } from './pages/all-blogs/all-blogs.component';
import { AddBlogComponent } from './pages/add-blog/add-blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { SearchComponent } from './pages/search/search.component';

//The routes constant is an array of objects, each object defines a single route in the application.
const routes: Routes = [
  { path: '', component: AllBlogsComponent, pathMatch: "full"  },
  //The :_id is a URL parameter and can be accessed within the component using the ActivatedRoute service.
  { path:'Blog/:_id', component: BlogDetailComponent },
  { path: 'Addblog', component: AddBlogComponent },
  { path: 'Search', component: SearchComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

