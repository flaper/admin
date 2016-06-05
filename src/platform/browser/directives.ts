import { PLATFORM_DIRECTIVES } from '@angular/core';
// Angular 2 Router
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {ObjectLink, AutoFocusIt} from "@flaper/angular";

// application_directives: directives that are global through out the application
export const APPLICATION_DIRECTIVES = [
  ...ROUTER_DIRECTIVES,
  ObjectLink, AutoFocusIt
];

export const DIRECTIVES = [
  {provide: PLATFORM_DIRECTIVES, multi: true, useValue: APPLICATION_DIRECTIVES}
];
