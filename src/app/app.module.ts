import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './routes';
// App is our top level component
import { App } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import {MenuLeft} from "./components/layout/MenuLeft/MenuLeft";
import {Footer} from "./components/layout/footer/footer";
import {Navbar} from "./components/layout/navbar/navbar";
import {PageNavigator} from "./components/layout/PageNavigator/PageNavigator";
import {PageDashboard} from "./components/pages/PageDashboard/PageDashboard";
import {PageLogin} from "./components/pages/PageLogin/PageLogin";
import {PageManageRequests} from "./components/pages/PageManageRequest/PageManageRequests";
import {PageLoginEmail} from "./components/pages/PageLogin/PageLoginEmail/PageLoginEmail";
import {ObjectLink, AutoFocusIt} from '@flaper/angular';
import {DateFormatPipe, TimeAgoPipe} from 'angular2-moment';
import {PageUsers} from "./components/pages/user/PageUsers/PageUsers";
import {PageUser} from "./components/pages/user/PageUser/PageUser";
import {EditLoginPassword} from "./components/pages/user/PageUser/EditLoginPassword/EditLoginPassword";

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS
];

/**
 * `AppModule` is the main entry point into Angular2's bootstrapping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App, MenuLeft, Footer, Navbar,PageNavigator, PageDashboard, PageLogin, PageManageRequests, PageLoginEmail, ObjectLink,
    DateFormatPipe, PageUsers, PageUser, EditLoginPassword, AutoFocusIt
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: false})
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef:ApplicationRef) {
  }

  hmrOnInit() {
    this.appRef.tick();
  }

  hmrOnDestroy() {
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy() {
  }
}
