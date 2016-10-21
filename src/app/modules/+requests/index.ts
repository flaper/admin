import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PageManageRequests} from './PageManageRequest/PageManageRequests';
import {SharedModule} from "../../shared/shared.module";

console.log('`Requests` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  {path: '', component: PageManageRequests, pathMatch: 'full'},
  {path: ':page', component: PageManageRequests, pathMatch: 'full'},
];

@NgModule({
  declarations: [PageManageRequests],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export default class RequestsModule {
  static routes = routes;
}
