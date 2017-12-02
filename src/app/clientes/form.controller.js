export default class FormController {

  constructor($stateParams, $state, $http) {
    this.record = {}
    this.titulo = 'Adicionando cliente'
    if ($stateParams.id) {
      this.titulo = 'Editando cliente'
    }
    this._state = $state
    this._http = $http
  }

  salvar() {
    this._http.post('http://localhost:8080/Pedidex-web/api/clientes', this.record)
      .then(response => {
        alert('Cliente salvo com sucesso')
        this._state.go('cliente.list')
      })
  }
}

FormController.$inject = ['$stateParams', '$state', '$http']
