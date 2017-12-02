export default class FormController {

  constructor($stateParams, $state, ClienteServico) {
    this.record = {}
    this.titulo = 'Adicionando cliente'

    this._servico = ClienteServico
    this._state = $state

    if ($stateParams.id) {
      this.titulo = 'Editando cliente'
      this.load($stateParams.id)
    }
  }

  load(id) {
    this._servico.findById(id)
      .then(data => {
        this.record = data
      })
  }

  salvar() {
    this._servico.save(this.record)
      .then(response => {
        alert(`Cliente ${response.status == 201 ? 'inserido' : 'atualizado'} com sucesso`)
        this._state.go('cliente.list')
      }).catch(erro => {
        console.log(erro)
      })
  }
}

FormController.$inject = ['$stateParams', '$state', 'ClienteServico']
