import {Component} from '@angular/core';
import {AUTH_PROVIDERS} from "@flaper/angular";
import {Title} from "@angular/platform-browser"
import {PageLoginEmail} from "./PageLoginEmail/PageLoginEmail"

@Component({
  selector: 'page-login',
  styles: [require('./PageLogin.scss')],
  template: require('./PageLogin.html'),
  entryComponents: [PageLoginEmail]
})
export class PageLogin {
  static MESSAGE = "";
  message;
  PROVIDERS = AUTH_PROVIDERS;

  constructor() {
    this.message = PageLogin.MESSAGE;
    //ts.setTitle('Войти на Флапер');
  }
}
