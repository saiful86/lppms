import { lazy } from 'react';

const Calendar = lazy(() => import('../components/Calendar'));
const Chart = lazy(() => import('../components/Chart'));
const FormElements = lazy(() => import('../components/Form/FormElements'));
const FormLayout = lazy(() => import('../components/Form/FormLayout'));
const Profile = lazy(() => import('../components/Profile'));
const Settings = lazy(() => import('../components/Settings'));
const Tables = lazy(() => import('../components/Tables'));
const Alerts = lazy(() => import('../components/UiElements/Alerts'));
const Buttons = lazy(() => import('../components/UiElements/Buttons'));

const coreRoutes = [
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
];

const routes = [...coreRoutes];
export default routes;
