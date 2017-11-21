export default class ListController {

    constructor($http) {
        this.filter = '';
        this.records = [];
        this._http = $http;
        this.load();
    }

    load() {
        this._http.get('http://localhost:8080/api/clientes').
          then((response) => {
              this.records = response.data;
          });
    }
}

ListController.$inject = ['$http']
