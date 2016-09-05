import {Component, Input} from "@angular/core";
import {UserService, ApiService} from "@flaper/angular";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: "edit-login-password",
  template: require("./EditLoginPassword.html"),
})

export class EditLoginPassword {
  userId = null;
  user = null;
  data = {};
  errorClass: string;
  error: string;
  constructor(private _user:UserService, route:ActivatedRoute, api:ApiService) {
    route.params.subscribe(params => {
      this.userId = params['id'];
    });
    this._user.getById(this.userId).subscribe(user => {
      this.data['id'] = this.userId;
      this.data['username'] = user.username;
    });
    // this.error = api.error_message;
  }

  onSubmit() {
    this._user.put(this.data).subscribe(
      data => {
        this.data = data;
      },
      err => {
        this.logErr(err);
      },
      () => {
        this.done()
      }
    );
  }
  done(){
    this.errorClass = "info";
    this.error = "Username и password успешно измненены";
  }

  logErr(err){
    let status = err.status;
    this.errorClass = "danger";
    switch(status){
      case 422:
        this.error = "Такой username уже существует";
        break;
      default:
        this.error = err.message;
        break;
    }
  }
}
