import { Component, computed, inject, signal } from '@angular/core';
import { ElementoService } from '../shared/services/elemento.service';
import type { Elemento } from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-signals-intro',
  imports: [],
  templateUrl: './signals-intro.html',
  styleUrl: './signals-intro.css',
})
export class SignalsIntro {
  private readonly service = inject(ElementoService);

  readonly elementos = this.service.elementos;
  readonly elementoSelecionado = this.service.elementoSelecionado;

  readonly exibirInfoElemento = computed(() => {
    const elemento = this.elementoSelecionado();
    return elemento
      ? `Nome: ${elemento.nome}, Símbolo: (${elemento.simbolo}), Número de Massa: ${elemento.numeroMassa}`
      : 'Nenhum elemento selecionado';
  });

  selecionarElemento(elemento: Elemento): void {
    this.service.setElemento(elemento);
  }
}
