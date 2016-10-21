import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from "../../shared/shared.module";
import {PageUsers} from "./PageUsers/PageUsers";
import {PageUser} from "./PageUser/PageUser";
import {EditLoginPassword} from "./PageUser/EditLoginPassword/EditLoginPassword";

export const routes = [
  {path: 'users', component: PageUsers},
  {path: 'users/:id', component: PageUser},
];

@NgModule({
  declarations: [PageUsers, PageUser, EditLoginPassword],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export default class UsersModule {
  static routes = routes;
}
