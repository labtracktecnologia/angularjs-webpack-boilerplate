import swal from 'sweetalert2'

export default class ListController {

  constructor(ClienteServico, Notification) {
    this.records = []
    this._servico = ClienteServico
    this._notify = Notification
    this.load()
  }

  load() {
    this._servico.findAll()
      .then(data => {
        this.records = data
      }).catch(erro => {
        console.log(erro)
        this._notify.error('Erro ao carregar a lista de clientes!')
      })
  }

  excluir(id) {
    swal({
      title: 'Você tem certeza?',
      text: 'Deseja realmente excluir o registro?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, é claro!',
      cancelButtonText: 'Não!'
    }).then((result) => {
      if (result.value) {
        return this._servico.remove(id)
      }
      return Promise.reject({message:'Exclusão cancelada!!!'})
    }).then(data => {
      this.load()
      this._notify.success('Cliente excluído com sucesso!')
    }).catch(erro => {
      this._notify.error(erro.message)
    }) 

  }
}

ListController.$inject = ['ClienteServico', 'Notification']
