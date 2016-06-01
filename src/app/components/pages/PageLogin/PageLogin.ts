import {Component} from '@angular/core';
import {AUTH_PROVIDERS} from "flaper";
import {Title} from "@angular/platform-browser"

@Component({
  selector: 'page-login',
  styles: [require('./PageLogin.scss')],
  template: require('./PageLogin.html')
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