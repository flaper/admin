import {PageDashboard} from "./components/pages/PageDashboard/PageDashboard";
import {PageLogin} from "./components/pages/PageLogin/PageLogin";
import {PageManageRequests} from "./components/pages/PageManageRequest/PageManageRequests";

export const ROUTES = [
  {path: '/', name: 'Dashboard', component: PageDashboard, useAsDefault: true},
  {path: '/login', name: 'Login', component: PageLogin},
  {path: '/requests', name: 'ManageRequests', component: PageManageRequests},
];
