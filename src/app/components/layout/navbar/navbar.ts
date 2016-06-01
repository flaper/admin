import {Component} from '@angular/core';
import {AuthService, UserService} from "flaper";
import {PageService} from "../../../services/helpers/PageService";

@Component({
  selector: 'navbar',
  styles: [require('./navbar.scss')],
  template: require('./navbar.html')
})
export class Navbar {
  constructor(private _auth:AuthService, private _user:UserService,
              private _page:PageService) {
  }

  logout() {
    this._auth.logout();
  }
}
