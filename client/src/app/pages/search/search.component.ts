import { Component } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  value = ""
  constructor(private service: BlogService) {}


  getSearchValue(value: any) {
    this.value = value;
      console.log(this.value)
  }

  
}

