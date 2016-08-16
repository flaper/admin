/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import { FORM_PROVIDERS, PathLocationStrategy, LocationStrategy } from '@angular/common';
// Angular 2 Http
import { HTTP_PROVIDERS } from '@angular/http';
// Angular 2 Router
import { provideRouter } from '@angular/router';
import {ALL_PROVIDERS} from "@flaper/angular";
import {Title} from "@angular/platform-browser";
import {ROUTES} from '../../app/routes';

/*
 * Application Providers/Directives/Pipes
 * providers/directives/pipes that only live in our browser environment
 */
//noinspection TypeScriptValidateTypes
export const APPLICATION_PROVIDERS = [
  Title,
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
  provideRouter(ROUTES),
  {provide: LocationStrategy, useClass: PathLocationStrategy}
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS,
  ...ALL_PROVIDERS
];
