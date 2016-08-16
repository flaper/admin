import {PageDashboard} from "./components/pages/PageDashboard/PageDashboard";
import {PageLogin} from "./components/pages/PageLogin/PageLogin";
import {PageManageRequests} from "./components/pages/PageManageRequest/PageManageRequests";
import {PageUsers} from "./components/pages/user/PageUsers/PageUsers";
import {PageUser} from "./components/pages/user/PageUser/PageUser";

export const ROUTES = [
  {path: '', component: PageDashboard},
  {path: 'login', component: PageLogin},
  {path: 'requests', component: PageManageRequests},
  {path: 'users', component: PageUsers},
  {path: 'users/:id', component: PageUser},
];
