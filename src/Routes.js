import Ipsum from './pages/Ipsum';
import Dolor from './pages/Dolor';
import Amet from './pages/Amet';
import Orbis from './pages/Orbis';

const baseName = '/';

const routes = () => [
  {
    iconClass: 'fa fa-crosshairs',
    title: 'Ipsum',
    to: '/',
    component: Ipsum
  },
  {
    iconClass: 'fa fa-crosshairs',
    title: 'Dolor',
    to: '/dolor',
    component: Dolor
  },
  {
    iconClass: 'fa fa-crosshairs',
    title: 'Amet',
    to: '/amet',
    component: Amet
  },
  {
    iconClass: 'fa fa-crosshairs',
    title: 'Orbis',
    to: '/orbis',
    component: Orbis
  }
];

export { baseName, routes };
