import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {JwtToken} from "@flaper/angular";
const PAGE_DEFAULT = 'PAGE_DEFAULT';
const PAGE_BEFORE_LOGIN = '_PAGE_BEFORE_LOGIN';

@Injectable()
export class PageService {
  constructor(private router:Router) {
    PageService._navigateAfterLogin = this.navigateAfterLogin.bind(this);
  }

  public getDefault() {
    return '/';
  }

  public navigateToDefault() {
    this.router.navigate([this.getDefault()]);
  }


  public navigateToLogin() {
    this.router.navigateByUrl('/login');
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

