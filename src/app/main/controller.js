export default class MainController {

  constructor($state) {
    this.titulo = 'Meu titulo!!!'
    this._state = $state
  }

  acao() {
    alert('isso é uma ação')
    this._state.go('cliente.list')
  }
}

MainController.$inject = ['$state']
