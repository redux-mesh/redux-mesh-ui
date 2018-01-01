import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ArticlesService} from '../articles/articles.service';
import {Article} from '../landing/landing.state';
import {SideNavActions} from './side-nav.actions';

@Injectable()
export class SideNavEpics {
  constructor(private sideNavActions: SideNavActions, private articlesService: ArticlesService) {
  }

  fetchAllArticles = action$ => {
    return action$.ofType(SideNavActions.FETCH_ALL_ARTICLES)
      .mergeMap(() => this.articlesService.fetchAllArticles()
        .map((articles: Article[]) => this.sideNavActions.fetchAllArticlesSuccess(articles))
        .catch(() => Observable.of(this.sideNavActions.fetchAllArticlesFail())));
  };

}