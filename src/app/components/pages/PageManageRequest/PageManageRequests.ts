import { Component } from '@angular/core';
import {ACL, ManageRequestService} from "@flaper/angular";

@Component({
  selector: 'ManageRequests',
  template: require('./PageManageRequests.html'),
  styles: [require('./PageManageRequests.scss')]
})
export class PageManageRequests {
  requests;

  constructor(private _requests:ManageRequestService, private acl:ACL) {
    this.updateRequests();
  }

  updateRequests() {
    //noinspection TypeScriptUnresolvedFunction
    this._requests.get({where: {}, order: 'created DESC'}).subscribe(data => this.requests = data);
  }

  approve(request) {
    this._requests.approve(request.id).subscribe(() => this.updateRequests());
  }

  deny(request) {
    this._requests.deny(request.id).subscribe(() => this.updateRequests());
  }
}
