import {Component, Input} from "@angular/core";
import {UserService, AuthService} from "@flaper/angular";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: "page-login-email",
  template: require("./PageLoginEmail.html"),
})

export class PageLoginEmail {
  userId = null;
  data = {};

  constructor(private _user:UserService, route:ActivatedRoute, auth:AuthService) {
    // route.params.subscribe(params => {
    //   this.userId = params['id'];
    // });
    // this._user.getById(this.userId).subscribe(user => { this.data = user});
    // this.data.login = this.user.login ? "";
  }
  onSubmit() {
    this.auth.login(this.data).subscribe(data => {this.data = data});
    // this._user.login(this.data);
    // console.log(this.data);
  }
}
