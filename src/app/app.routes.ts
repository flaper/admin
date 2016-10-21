import {PageDashboard} from "./components/pages/PageDashboard/PageDashboard";
import {PageLogin} from "./components/pages/PageLogin/PageLogin";
import {RouteProtector} from "./services/helpers/RouteProtector";

let defaultComponent = (component: any) => component.default;

let routes = [
  {path: '', component: PageDashboard},
  {path: 'login', component: PageLogin, useAsDefault: true},
  {path: 'requests', loadChildren: () => System.import('./modules/+requests').then(defaultComponent)},
  {path: 'users', loadChildren: 'modules/index#UsersModule' },
];

routes.forEach(route=> {
  if (route.path !== 'login')
    route['canActivate'] = [RouteProtector];
});

export const ROUTES = routes;
