export default class ListController {

    constructor(ClienteServico) {
        this.filter = ''
        this.records = []
        this._service = ClienteServico
        this.load()
    }

    load() {
        this._service.findAll()
          .then(data => {
              this.records = data
          })
          .catch(error => {
              console.log(error)
          })
    }

    excluir(id) {
        this._service.remove(id)
            .then(response => {
                this.load()
            })
    }
}

ListController.$inject = ['ClienteServico']
