import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';


import {MenuLeft} from "./components/layout/MenuLeft/MenuLeft";
import {Footer} from "./components/layout/footer/footer";
import {UserService} from "flaper";
import {PageDashboard} from "./components/pages/PageDashboard/PageDashboard";
import {PageLogin} from "./components/pages/PageLogin/PageLogin";
import {PageService} from "./services/helpers/PageService";

@Component({
  selector: 'app',
  directives: [MenuLeft, Footer],
  encapsulation: ViewEncapsulation.None,
  template: require('./app.html')
})
@RouteConfig([
  {path: '/', name: 'Dashboard', component: PageDashboard, useAsDefault: true},
  {path: '/dashboard', name: 'Dashboard', component: PageDashboard},
  {path: '/login', name: 'Login', component: PageLogin},
])
export class App {
  constructor(private _user:UserService, private _page:PageService) {

  }

  ngOnInit() {
    if (!this._user.currentUserId) {
      this._page.navigateToLogin();
    }
  }
}
