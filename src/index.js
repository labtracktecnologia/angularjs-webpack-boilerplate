import { appModule } from './app/main.module';

import './style.scss';

angular.bootstrap(document.body, [appModule], { strictDi: true });
