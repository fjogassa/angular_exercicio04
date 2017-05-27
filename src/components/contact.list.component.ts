import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contact-list',
  template: `
      <div class="panel panel-default">
        <table class="table table-striped">
          <tr *ngFor="let contato of listaContatos">
            <!--
            <td>
              <a [href]="contato.nome" target="_blank">{{contato.nome}}</a>
            </td>
            -->
            <td class="hidden-xs hidden-sm">{{contato.nome}}</td>
            <td class="hidden-xs hidden-sm">{{contato.telefone}}</td>
            <td class="hidden-xs hidden-sm">{{contato.email}}</td>
            <td>
              <button (click)="onEdit(contato)" class="btn btn-primary">
                <span class="glyphicon glyphicon-pencil"></span>
                <span class="hidden-xs">Editar</span>
              </button>
              <button (click)="onRemove(contato)" class="btn btn-danger">
                <span class="glyphicon glyphicon-trash"></span>
                <span class="hidden-xs">Remover</span>
              </button>
            </td>
          </tr>
        </table>
      </div>
    `
})
export class ContactListComponent {

  @Input() listaContatos = [];
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  onEdit(contato) {
    this.edit.emit(contato);
  }

  onRemove(contato) {
    this.remove.emit(contato);
  }
}
