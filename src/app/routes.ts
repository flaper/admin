import {PageDashboard} from "./components/pages/PageDashboard/PageDashboard";
import {PageLogin} from "./components/pages/PageLogin/PageLogin";
import {PageManageRequests} from "./components/pages/PageManageRequest/PageManageRequests";
import {PageUsers} from "./components/pages/user/PageUsers/PageUsers";
import {PageUser} from "./components/pages/user/PageUser/PageUser";

export const ROUTES = [
  {path: '/', name: 'Dashboard', component: PageDashboard, useAsDefault: true},
  {path: '/login', name: 'Login', component: PageLogin},
  {path: '/requests', name: 'ManageRequests', component: PageManageRequests},
  {path: '/users', name: 'Users', component: PageUsers},
  {path: '/users/:id', name: 'User', component: PageUser},
];
