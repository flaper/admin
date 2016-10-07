import {PageDashboard} from "./components/pages/PageDashboard/PageDashboard";
import {PageLogin} from "./components/pages/PageLogin/PageLogin";
import {PageManageRequests} from "./components/pages/PageManageRequest/PageManageRequests";
import {PageUsers} from "./components/pages/user/PageUsers/PageUsers";
import {PageUser} from "./components/pages/user/PageUser/PageUser";
import {RouteProtector} from "./services/helpers/RouteProtector";

export const ROUTES = [
  {path: '', component: PageDashboard,canActivate:[RouteProtector]},
  {path: 'login', component: PageLogin,useAsDefault:true},
  {path: 'requests', component: PageManageRequests,canActivate:[RouteProtector]},
  {path: 'requests/:page', component: PageManageRequests,canActivate:[RouteProtector]},
  {path: 'users', component: PageUsers,canActivate:[RouteProtector]},
  {path: 'users/:id', component: PageUser,canActivate:[RouteProtector]},
];
