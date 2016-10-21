import {PageDashboard} from "./components/pages/PageDashboard/PageDashboard";
import {PageLogin} from "./components/pages/PageLogin/PageLogin";
import {PageUsers} from "./components/pages/user/PageUsers/PageUsers";
import {PageUser} from "./components/pages/user/PageUser/PageUser";
import {RouteProtector} from "./services/helpers/RouteProtector";

let defaultComponent = (component: any) => component.default;

let routes = [
  {path: '', component: PageDashboard},
  {path: 'login', component: PageLogin, useAsDefault: true},
  {path: 'requests', loadChildren: () => System.import('./modules/+requests').then(defaultComponent)},
  {path: 'users', component: PageUsers},
  {path: 'users/:id', component: PageUser},
];

routes.forEach(route=> {
  if (route.path !== 'login')
    route['canActivate'] = [RouteProtector];
});

export const ROUTES = routes;
