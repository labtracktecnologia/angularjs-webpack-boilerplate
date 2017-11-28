import MainController from './controller'

export const mainConfig = (modulo) => {
  
  return ['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/')
    $stateProvider
      .state('home', {
        template: require('@views/main/component.html'),
        controller: MainController,
        controllerAs: 'vm',
        url: '/'
      })
  }]
}
