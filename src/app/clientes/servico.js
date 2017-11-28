import AbstractCrudService from "../abstract.crud.service";

export default class ClienteServico extends AbstractCrudService {

  constructor($http) {
    super($http, 'http://localhost:8080/api/clientes')
  }

}

ClienteServico.$inject = ['$http']
