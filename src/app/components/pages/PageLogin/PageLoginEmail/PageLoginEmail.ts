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

  constructor(private auth:AuthService) {
  }

  onSubmit() {
    this.auth.login(this.data);
  }
}
