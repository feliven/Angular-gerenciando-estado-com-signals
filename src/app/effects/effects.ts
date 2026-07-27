import { Component, inject } from '@angular/core';
import { ElementoService } from '../shared/services/elemento.service';
import type { Elemento } from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-effects',
  imports: [],
  templateUrl: './effects.html',
  styleUrl: './effects.css',
})
export class Effects {
  private readonly service = inject(ElementoService);

  readonly elementos = this.service.elementos;
  readonly elementoSelecionado = this.service.elementoSelecionado;
  readonly temperatura = this.service.temperatura;
  readonly estadoFisico = this.service.estadoFisico;

  selecionarElemento(elemento: Elemento) {
    this.service.setElemento(elemento);
  }

  ajustarTemperatura(temperatura: number) {
    this.service.setTemperatura(temperatura);
  }
}
