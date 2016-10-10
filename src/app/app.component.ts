import { Component, ViewEncapsulation } from '@angular/core';
import {MenuLeft} from "./components/layout/MenuLeft/MenuLeft";
import {Footer} from "./components/layout/footer/footer";
import {UserService} from "@flaper/angular";
import 'jquery';
import {Router,ActivatedRoute} from "@angular/router";
import {PageService} from "./services/helpers/PageService";
import {Navbar} from "./components/layout/navbar/navbar";

@Component({
  selector: 'app',
  entryComponents: [MenuLeft, Navbar, Footer],
  encapsulation: ViewEncapsulation.None,
  template: require('./app.html'),
  styles: [require('./app.styles.scss')]
})
export class App {
  constructor(private _user:UserService, private _page:PageService, private router:Router,
              private route:ActivatedRoute) {
      if (window.innerWidth >= 1000) this.initScroller();
  }
  ngAfterContentChecked(){
    if (!this._user.currentUserId && window.location.pathname != "/login")  {
      this.router.navigate(['/login']);
    }
  }
  initScroller() {
    require('scrollup/dist/jquery.scrollUp.min');

    $.scrollUp({
      scrollName: 'scrollUp',      // Element ID
      scrollDistance: 300,         // Distance from top/bottom before showing element (px)
      scrollFrom: 'top',           // 'top' or 'bottom'
      scrollSpeed: 300,            // Speed back to top (ms)
      easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
      animation: 'fade',           // Fade, slide, none
      animationSpeed: 200,         // Animation speed (ms)
      scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
      scrollTarget: 0,         // Set a custom target element for scrolling to. Can be element or number
      scrollText: false, // Text for element, can contain HTML
      scrollTitle: false,          // Set a custom <a> title if required.
      scrollImg: false,            // Set true to use image
      activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      zIndex: 2147483647           // Z-Index for the overlay
    });
  }
}
