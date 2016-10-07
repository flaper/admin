import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '@flaper/angular';

@Injectable()
export class RouteProtector implements CanActivate {
  constructor(private _user:UserService) {

  }
  canActivate() {
    return !!this._user.currentUserId;
  }
}
