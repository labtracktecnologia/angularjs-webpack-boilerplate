import * as angular from 'angular';

import { default as uiRouter } from '@uirouter/angularjs';
import { mainConfig } from './main/config';
import { clienteConfig } from './clientes/config';

export const name = 'app';

angular.module(name, [uiRouter])
  .config(mainConfig)
  .config(clienteConfig);
