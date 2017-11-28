import ListController from './list.controller'
import FormController from './form.controller'

import ClienteServico from './servico'

export const clienteConfig = (modulo) => {

  modulo.service('ClienteServico', ClienteServico)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('cliente', {
        template: require('@views/default.html'),
        url: '/clientes',
        onEnter: ['$state', function($state) {
          $state.go('cliente.list')
        }]
      })
      .state('cliente.list', {
        template: require('@views/clientes/list.html'),
        url: '/list',
        controller: ListController,
        controllerAs: 'vm'
      })
      .state('cliente.new', {
        template: require('@views/clientes/form.html'),
        url: '/new',
        controller: FormController,
        controllerAs: 'vm'
      })
      .state('cliente.edit', {
        template: require('@views/clientes/form.html'),
        url: '/{id}',
        controller: FormController,
        controllerAs: 'vm'
      });
  }]
}
