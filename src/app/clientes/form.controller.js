export default class FormController {

    constructor($stateParams, $http, $state) {
        this.record = {};
        this.title = 'Adicionando registro';
        if ($stateParams.id) {
            this.title = 'Editando registro';
            $http.get(`http://localhost:8080/api/clientes/${$stateParams.id}`)
              .then((response) => {
                  this.record = response.data;
              });
        }
        this._http = $http;
        this._state = $state;
    }

    save() {
        let httpReq;
        if (this.record._id) {
            httpReq = this._http.put(`http://localhost:8080/api/clientes/${this.record._id}`, this.record);
        } else {
            httpReq = this._http.post(`http://localhost:8080/api/clientes`, this.record);
        }
        httpReq.then(resp => {
            this._state.go('cliente.list')
        })
    }
}

FormController.$inject = ['$stateParams', '$http', '$state'];
