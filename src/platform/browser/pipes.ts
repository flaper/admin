import { PLATFORM_PIPES } from '@angular/core';
import {CORE_PIPES} from "@flaper/angular";
import {TimeAgoPipe} from "angular2-moment/TimeAgoPipe";
import {DateFormatPipe} from "angular2-moment/DateFormatPipe";

// application_pipes: pipes that are global through out the application
export const APPLICATION_PIPES = [
  TimeAgoPipe,
  DateFormatPipe,
  CORE_PIPES
];

export const PIPES = [
  {provide: PLATFORM_PIPES, multi: true, useValue: APPLICATION_PIPES}
];
