import { Component, inject } from '@angular/core';
import { ElementoService } from '../shared/services/elemento.service';
import type { Elemento } from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-element-list',
  imports: [],
  templateUrl: './element-list.html',
  styleUrl: './element-list.css',
})
export class ElementList {
  private readonly service = inject(ElementoService);

  readonly elementos = this.service.elementos;
  readonly elementoSelecionado = this.service.elementoSelecionado;
  readonly favoritos = this.service.favoritos;

  selecionarElemento(elemento: Elemento) {
    this.service.setElemento(elemento);
  }

  elementoEFavorito(elemento: Elemento) {
    return this.favoritos().includes(elemento);
  }

  alternarFavorito(elemento: Elemento) {
    if (this.elementoEFavorito(elemento)) {
      this.service.removerFavorito(elemento);
    } else {
      this.service.setFavorito(elemento);
    }
  }
}
