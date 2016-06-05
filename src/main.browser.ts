import { bootstrap } from '@angular/platform-browser-dynamic';
import {API_BASE_URL, API_SERVER_URL} from './app/services/consts/Consts';
import {Config as LibConfig} from "@flaper/angular";
import {PageService} from "./app/services/helpers/PageService";

LibConfig.Init({
  API_URL: API_BASE_URL,
  API_SERVER_URL: API_SERVER_URL,
  SUCCESS_LOGIN_CALLBACK: PageService.NavigateAfterLogin
});


//noinspection TypeScriptCheckImport
import { DIRECTIVES, PIPES, PROVIDERS } from './platform/browser';
import { ENV_PROVIDERS } from './platform/environment';

import { App} from './app/app.component';
import {APP_PROVIDERS} from './app/index';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main(initialHmrState?:any):Promise<any> {

  //noinspection TypeScriptValidateTypes
  return bootstrap(App, [
    ...PROVIDERS,
    ...ENV_PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
    ...APP_PROVIDERS
  ])
    .catch(err => console.error(err));

}


/*
 * Vendors
 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
 * You can also import them in vendors to ensure that they are bundled in one file
 * Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
 */


/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */
if ('development' === ENV && HMR === true) {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module);
} else {
  // bootstrap when document is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
