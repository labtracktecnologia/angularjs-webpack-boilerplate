export default class ListController {

  constructor($http) {
    this.records = []
    this._http = $http
    this.load()
  }

  load() {
    this._http.get('http://localhost:8080/Pedidex-web/api/clientes')
      .then(response => {
        this.records = response.data
      }).catch(erro => {
        console.log(erro)
      })
  }

  excluir(id) {
    alert(`Registro ${id} excluído com sucesso!!!`)
  }
}

ListController.$inject = ['$http']
