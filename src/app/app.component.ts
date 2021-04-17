import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  para = 'You will enjoy, if you are a Bookworm.';
  authors;
  constructor(service: AuthorsService){
    this.authors=service.getAuthors();
  }
}
