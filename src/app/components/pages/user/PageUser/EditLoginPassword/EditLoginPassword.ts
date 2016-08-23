import {Component, Input} from "@angular/core";
import {UserService} from "@flaper/angular";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: "edit-login-password",
  template: require("./EditLoginPassword.html"),
})

export class EditLoginPassword {
  userId = null;
  user = null;
  data = {};

  constructor(private _user:UserService, route:ActivatedRoute) {
    route.params.subscribe(params => {
      this.userId = params['id'];
    });
    this._user.getById(this.userId).subscribe(user => {
      this.data['id'] = this.userId;
      this.data['username'] = user.username;
    });
  }

  onSubmit() {
    this._user.put(this.data).subscribe(data => {
      this.data = data
    });
  }
}
