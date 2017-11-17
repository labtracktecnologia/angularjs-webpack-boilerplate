import MainController from './controller'

export const mainConfig = ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      template: require('@views/main/component.html'),
      controller: MainController,
      controllerAs: 'vm',
      url: '/'
    });
};

mainConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
