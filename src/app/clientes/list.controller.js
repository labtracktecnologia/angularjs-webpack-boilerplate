export default class ListController {

  constructor(ClienteServico) {
    this.records = []
    this._servico = ClienteServico
    this.load()
  }

  load() {
    this._servico.findAll()
      .then(data => {
        this.records = data
      }).catch(erro => {
        console.log(erro)
      })
  }

  excluir(id) {
    if (confirm('Deseja realmente apagar o Registro?')) {
      this._servico.remove(id)
        .then(response => {
          this.load()
        })
    }
  }
}

ListController.$inject = ['ClienteServico']
