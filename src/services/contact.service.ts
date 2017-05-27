import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContactService {

  errorHandler = error => console.error('ContactService error', error);
  private privateURL = 'https://treinamento-angular.firebaseio.com/';
  private collection = 'contatos';

  constructor (private http: Http) { };

  adicionaContato(contato) {
    const json = JSON.stringify(contato);
    return this.http.post(`${this.privateURL}/${this.collection}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  buscaContato() {
    return this.http.get(`${this.privateURL}/${this.collection}.json`)
      .toPromise()
      .then(response => this.convert(response.json()))
      .catch(this.errorHandler);
  }

  removeContato(contato) {
    return this.http.delete(`${this.privateURL}/${this.collection}/${contato.id}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  atualizaContato(contato) {
    const json = JSON.stringify({
      nome: contato.nome,
      telefone: contato.telefone,
      email: contato.email
    });
    return this.http.patch(`${this.privateURL}/${this.collection}/${contato.id}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        nome: parsedResponse[id].nome,
        telefone: parsedResponse[id].telefone,
        email: parsedResponse[id].email
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }
}
