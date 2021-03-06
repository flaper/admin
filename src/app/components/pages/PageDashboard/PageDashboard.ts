import { Component } from '@angular/core';
import {UserService, StoryService} from "@flaper/angular";
import * as moment from 'moment';

@Component({
  selector: 'Dashboard',
  template: require('./PageDashboard.html'),
  styles: [require('./PageDashboard.scss')]
})
export class PageDashboard {
  totalUsers = null;
  lastUsers = null;

  totalStories = null;
  lastStories = null;

  totalReviews = null;
  lastReviews = null;

  constructor(private _user:UserService, private _story: StoryService) {
    let d = moment().subtract(30, 'days').toDate();
    this._user.count().subscribe(count => this.totalUsers = count);
    this._user.count({created: {gt: d}}).subscribe(count => this.lastUsers = count);
    this._story.count({type:'article'}).subscribe(count => this.totalStories = count);
    this._story.count({created: {gt: d}, type:'article'}).subscribe(count => this.lastStories = count);
    this._story.count({type:'review'}).subscribe(count => this.totalReviews = count);
    this._story.count({created: {gt: d}, type:'review'}).subscribe(count => this.lastReviews = count);
  }
}
