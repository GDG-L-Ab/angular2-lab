import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { HeaderComponent } from './shared/';
import { Article } from './article/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }

}
