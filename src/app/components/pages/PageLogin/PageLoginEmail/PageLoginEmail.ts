import {Component} from "@angular/core";
import {AuthService} from "@flaper/angular";

@Component({
  selector: "page-login-email",
  template: require("./PageLoginEmail.html"),
})

export class PageLoginEmail {
  data = {};

  constructor(private auth:AuthService) {
  }
  onSubmit() {
    this.auth.login(this.data);
  }
}
