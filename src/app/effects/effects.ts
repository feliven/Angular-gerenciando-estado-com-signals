import { Component, effect, signal } from '@angular/core';
import type { Elemento } from '../signals-intro/signals-intro';

interface ElementoEFases extends Elemento {
  pontoFusao: number;
  pontoEbulicao: number;
}

@Component({
  selector: 'app-effects',
  imports: [],
  templateUrl: './effects.html',
  styleUrl: './effects.css',
})
export class Effects {
  elementos: ElementoEFases[] = [
    { nome: 'Hidrogênio', simbolo: 'H', numeroMassa: 1, pontoFusao: -259, pontoEbulicao: -253 },
    { nome: 'Carbono', simbolo: 'C', numeroMassa: 12, pontoFusao: 3550, pontoEbulicao: 4027 },
    { nome: 'Nitrogênio', simbolo: 'N', numeroMassa: 14, pontoFusao: -210, pontoEbulicao: -196 },
    { nome: 'Oxigênio', simbolo: 'O', numeroMassa: 16, pontoFusao: -218, pontoEbulicao: -183 },
    { nome: 'Sódio', simbolo: 'Na', numeroMassa: 23, pontoFusao: 98, pontoEbulicao: 883 },
    { nome: 'Cloro', simbolo: 'Cl', numeroMassa: 35, pontoFusao: -101, pontoEbulicao: -34 },
  ];

  protected elementoSelecionado = signal<ElementoEFases | null>(null);
  protected temperatura = signal<number>(25);
  protected estadoFisico = signal<string>('(nenhum)');

  constructor() {
    effect(() => {
      const elemento = this.elementoSelecionado();
      const temp = this.temperatura();

      if (!elemento) {
        return;
      }

      let estado;
      if (temp < elemento.pontoFusao) {
        estado = 'sólido';
      } else if (temp > elemento.pontoEbulicao) {
        estado = 'gasoso';
      } else {
        estado = 'líquido';
      }
      this.estadoFisico.set(estado);
    });
  }

  selecionarElemento(elemento: ElementoEFases) {
    this.elementoSelecionado.set(elemento);
  }

  ajustarTemperatura(temperatura: number) {
    this.temperatura.set(temperatura);
  }
}
