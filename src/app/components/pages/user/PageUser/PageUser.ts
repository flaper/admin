import { Component } from '@angular/core';
import {UserService, RoleService, ACL} from "@flaper/angular";
import {ActivatedRoute} from '@angular/router';
import {EditLoginPassword} from './EditLoginPassword/EditLoginPassword';

@Component({
  selector: 'User',
  template: require('./PageUser.html'),
  styles: [require('./PageUser.scss')],
  directives: [EditLoginPassword]
})
export class PageUser {
  role;
  userId = null;
  user = null;
  allRoles = [];
  roles = [];

  constructor(private _user:UserService, private acl:ACL, route:ActivatedRoute, private _role:RoleService) {
    route.params.subscribe(params => {
      this.userId = params['id'];
      this.requestUserRoles();
      this._role.get().subscribe(roles => {
        this.allRoles = roles;
        this.newRoles();
      })
    });
  }

  requestUserRoles() {
    this._user.requestById(this.userId, {include: 'roles'})
      .subscribe(data => {
        this.user = data;
        this.newRoles();
      });
  }

  newRoles() {
    if (this.allRoles.length && this.user) {
      this.roles = this.allRoles.filter(role => !this.user['roles'].includes(role.name));
      if (this.user['roles'].includes('super')) {
        this.roles = [];
      }
    }
  }

  addRole() {
    if (this.role) {
      this._role.post(this.user.id, this.role)
        .subscribe(() => {
          this.requestUserRoles();
          this.role = "";
        })
    }
  }

  deleteAllRoles() {
    this._role.del(this.user.id).subscribe(() => this.requestUserRoles());
  }
}
