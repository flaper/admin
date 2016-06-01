import {Component, ElementRef} from '@angular/core';
import {AuthService, UserService} from "flaper";
import {PageService} from "../../../services/helpers/PageService";

@Component({
  selector: 'menu-left',
  styles: [require('./MenuLeft.scss')],
  template: require('./MenuLeft.html')
})
export class MenuLeft {
  items = [
    {label: 'Dashboard', route: ['/Dashboard'], iconClass: 'fa fa-dashboard'},
  ];

  constructor(private elementRef:ElementRef, private authService:AuthService) {
  }

  hasToggle() {
    let item = ls.getItem('ml-toggle');
    try {
      item = JSON.parse(item);
    }
    catch (e) {
      return false;
    }

    return item;
  }

  toggle() {
    //mobile && tablets collapsed by default, desktop not
    let el = this.elementRef.nativeElement.querySelector('.ml');
    el.classList.toggle('ml-toggle');
    ls.setItem('ml-toggle', el.classList.contains('ml-toggle'));
  }

  toggleSm() {
    let el = this.elementRef.nativeElement.querySelector('#ml-items');
    el.classList.remove('mobile-collapsed');
    //noinspection TypeScriptValidateTypes
    let $el:any = $(el);
    $el.collapse('toggle');
  }

  logout() {
    this.authService.logout();
  }
}
