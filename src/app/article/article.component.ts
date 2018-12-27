import { Component, OnInit, HostBinding, Input } from '@angular/core';
import{Article} from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
 @HostBinding('attr.class') cssClass="row";
 @Input() article: Article      // class in article.model  , input used because in app html we are taking input
  constructor() { 
    //this.article = new Article('Angular 2','http://angular.io',10);
  }
  voteUp():boolean{
    this.article.voteUp()     //in article.model
    return false
  }
  voteDown():boolean{
    this.article.voteDown()   //in article.model
    return false
  }
  ngOnInit() {
  }

}
