import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'crud-firebase',
    template:
    `
        <h2>Fábio Jun e Guilherme Américo</h2>
        
        <contact-edit [contato]="contatoAtual"
            (save)="save($event)" (clear)="clear()"></contact-edit>
        <contact-list [listaContatos]="listaContatos"
            (edit)="edit($event)" (remove)="remove($event)"></contact-list>
    `
})
export class AppComponent {

    listaContatos = [];
    contatoAtual = {};

    constructor (private contatoService: ContactService) {
      contatoService.errorHandler = error =>
        window.alert('Request failed');
      this.reload();
    }

    clear() {
      this.contatoAtual = {};
    }

    edit(contato) {
      this.contatoAtual = Object.assign({}, contato);
    }

    remove(contato) {
      this.contatoService.removeContato(contato)
        .then(() => this.reload());
    }

    save(contato) {
      console.log("Save");
      if (contato.id) {
        this.contatoService.atualizaContato(contato)
          .then(() => this.reload());
      } else {
        this.contatoService.adicionaContato(contato)
          .then(() => this.reload());
      }
      this.clear();
    }

    private reload() {
      return this.contatoService.buscaContato()
        .then(listaContatos => this.listaContatos = listaContatos);
    }

}
