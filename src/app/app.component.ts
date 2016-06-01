import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';
import {MenuLeft} from "./components/layout/MenuLeft/MenuLeft";
import {Footer} from "./components/layout/footer/footer";
import {UserService} from "flaper";
import {PageService} from "./services/helpers/PageService";
import {ROUTES} from './routes';

@Component({
  selector: 'app',
  directives: [MenuLeft, Footer],
  encapsulation: ViewEncapsulation.None,
  template: require('./app.html')
})
@RouteConfig(ROUTES)
export class App {
  constructor(private _user:UserService, private _page:PageService) {

  }

  ngOnInit() {
    if (!this._user.currentUserId) {
      this._page.navigateToLogin();
    }
  }
}
