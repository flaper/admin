import { Component, ViewEncapsulation } from '@angular/core';
import {MenuLeft} from "./components/layout/MenuLeft/MenuLeft";
import {Footer} from "./components/layout/footer/footer";
import {UserService} from "@flaper/angular";
import {PageService} from "./services/helpers/PageService";
import {Navbar} from "./components/layout/navbar/navbar";

@Component({
  selector: 'app',
  entryComponents: [MenuLeft, Navbar, Footer],
  encapsulation: ViewEncapsulation.None,
  template: require('./app.html')
})
export class App {
  constructor(private _user:UserService, private _page:PageService) {

  }

  ngOnInit() {
    if (!this._user.currentUserId) {
      this._page.navigateToLogin();
    }
  }
}
