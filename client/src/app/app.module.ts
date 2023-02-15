// This is the AppModule in Angular, it's a root module that defines all the components 

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// BrowserModule, which is a required module for any Angular application that runs in a browser. It provides common services and directives that are essential for running an Angular application in a browser.
import { BrowserModule } from '@angular/platform-browser';

//This imports the AppRoutingModule, which defines the routes for the application.
import { AppRoutingModule } from './app-routing.module';

// imports the AppComponent, which is the root component of the application.
import { AppComponent } from './app.component';

// import the various components in the application:
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AddBlogComponent } from './Components/add-blog/add-blog.component'
import { AllBlogsComponent } from './Components/all-blogs/all-blogs.component';
import { BlogDetailComponent } from './Components/blog-detail/blog-detail.component'



//his is an array of all the components that are declared by this module.



// The declarations property is an array of components that imported in the previous step.
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddBlogComponent,
    AllBlogsComponent,
    BlogDetailComponent
  ],

//The imports property is an array of the modules that this module needs in order to run. 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // The providers property is an array of the services that the components in this module can use.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
