import { Component } from '@angular/core';
import {ManageRequestService} from "flaper";

@Component({
  selector: 'ManageRequests',
  template: require('./PageManageRequests.html')
})
export class PageManageRequests {
  requests;

  constructor(private _requests:ManageRequestService) {
    //noinspection TypeScriptUnresolvedFunction
    this._requests.get({where: {}, order: 'created DESC'}).subscribe(data => this.requests = data);
  }
}
