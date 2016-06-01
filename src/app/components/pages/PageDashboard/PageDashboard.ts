import { Component } from '@angular/core';
import {UserService} from "flaper";

@Component({
  selector: 'Dashboard',
  template: require('./PageDashboard.html')
})
export class PageDashboard {
  constructor(private _user: UserService) {

  }
}
