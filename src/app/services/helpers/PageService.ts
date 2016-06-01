import {Injectable} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {JwtToken} from "flaper";
const PAGE_DEFAULT = 'PAGE_DEFAULT';
const PAGE_BEFORE_LOGIN = '_PAGE_BEFORE_LOGIN';

@Injectable()
export class PageService {
  constructor(private router:Router) {
    PageService._navigateAfterLogin = this.navigateAfterLogin.bind(this);
  }

  public getDefault() {
    let value = PageService.GetFromLS();
    let hasUser = JwtToken.get() ? true : false;
    if (!value) {
      value = 'Dashboard';
    }
    return value;
  }

  public setDefault(value) {
    ls.setItem(PAGE_DEFAULT, value);
  }

  public navigateToDefault() {
    this.router.navigate([this.getDefault()]);
  }


  private static GetFromLS() {
    let value = ls.getItem(PAGE_DEFAULT);
    value = ['News', 'Home'].indexOf(value) > -1 ? value : null;
    return value;
  }

  public navigateToLogin() {
    this.router.navigate(['/Login']);
  }

  public navigateAfterLogin() {
    let route = this.getDefault();
    this.router.navigate([route]);
  }

  private static _navigateAfterLogin = null;
  public static NavigateAfterLogin = () => {
    if (PageService._navigateAfterLogin) {
      PageService._navigateAfterLogin();
    }
  };
}

export let PAGE_PROVIDER = [PageService];

