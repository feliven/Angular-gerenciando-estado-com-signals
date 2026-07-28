import { Component, inject } from '@angular/core';
import { ElementoService } from '../shared/services/elemento.service';
import type { Elemento } from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-computed-signal',
  imports: [],
  templateUrl: './computed-signal.html',
  styleUrl: './computed-signal.css',
})
export class ComputedSignal {
  private readonly service = inject(ElementoService);

  elementos = this.service.elementos;
  elementoSelecionado1 = this.service.elementoCalculado1;
  elementoSelecionado2 = this.service.elementoCalculado2;
  massaAtomicaTotal = this.service.massaAtomicaTotal;

  selecionarElemento1(elemento: Elemento) {
    this.service.setElemento1(elemento);
  }
  selecionarElemento2(elemento: Elemento) {
    this.service.setElemento2(elemento);
  }
}
