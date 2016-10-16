import { Component, OnInit } from '@angular/core';
import { Article} from '../article';

@Component({
  selector: 'article-list',
  inputs: ['article'],
  host: {
    class: 'row'
  },
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  article: Article;

  constructor() { }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
