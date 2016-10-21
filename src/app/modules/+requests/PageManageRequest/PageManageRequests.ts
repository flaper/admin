import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {ACL, ManageRequestService} from "@flaper/angular";

@Component({
  selector: 'ManageRequests',
  template: require('./PageManageRequests.html'),
  styles: [require('./PageManageRequests.scss')]
})
export class PageManageRequests {
  requests;
  status = 'active';
  pageSize:number = 25;
  currentPage:number = 1;
  pages:number = 0;
  STATUSES = ['active', 'approved', 'denied', 'deleted'];

  constructor(private _requests:ManageRequestService, private acl:ACL,
              private router:Router, private route:ActivatedRoute) {
    route.params.subscribe(params => {
      this.currentPage = parseInt(params['page']) || 1;
      this.updateRequests();
    });
  }

  updateRequests() {
    //noinspection TypeScriptUnresolvedFunction
    this._requests.get({
      where: {status: this.status},
      limit: this.pageSize,
      offset: (this.currentPage - 1) * this.pageSize,
      order: 'created DESC'
    }).subscribe(data => this.requests = data);

    this._requests.count({status: this.status}).subscribe(data => {
      this.pages = Math.floor(data / this.pageSize);
    })
  }

  statusChanged(event) {
    this.status = event.target.value;
    this.updateRequests();
  }

  approve(request) {
    this._requests.approve(request.id).subscribe(() => this.updateRequests());
  }

  deny(request) {
    this._requests.deny(request.id).subscribe(() => this.updateRequests());
  }
}
