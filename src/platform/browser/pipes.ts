/*
 * These are globally available pipes in any template
 */

import { PLATFORM_PIPES } from '@angular/core';
import {CORE_PIPES} from 'flaper';

// application_pipes: pipes that are global through out the application
export const APPLICATION_PIPES = [
  CORE_PIPES
];

export const PIPES = [
  {provide: PLATFORM_PIPES, multi: true, useValue: APPLICATION_PIPES}
];
