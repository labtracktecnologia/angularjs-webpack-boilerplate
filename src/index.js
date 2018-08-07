import { name as appName } from './app/main.module';

import './style.scss';
require('bootstrap');

angular.bootstrap(document.body, [appName], { strictDi: true });
