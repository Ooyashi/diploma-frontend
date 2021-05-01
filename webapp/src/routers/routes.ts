import {
  HomeComponent,
  LoginComponent,
  RegisterComponent,
} from '../components';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
    exact: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
    exact: true,
  },
  {
    path: '/register/client',
    name: 'Register',
    component: RegisterComponent,
    exact: true,
  },
];

export default routes;
