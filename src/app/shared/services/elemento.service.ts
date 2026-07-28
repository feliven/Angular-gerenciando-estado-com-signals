import { computed, effect, Service, signal } from '@angular/core';
import type { Elemento } from '../interfaces/interfaces';

@Service()
export class ElementoService {
  private _elementoSelecionado = signal<Elemento | null>(null);
  readonly elementoSelecionado = this._elementoSelecionado.asReadonly();

  private _temperatura = signal<number>(25);
  readonly temperatura = this._temperatura.asReadonly();

  private _estadoFisico = signal<string>('(nenhum)');
  readonly estadoFisico = this._estadoFisico.asReadonly();

  private _favoritos = signal<Elemento[]>([]);
  readonly favoritos = this._favoritos.asReadonly();

  readonly elementos: Elemento[] = [
    { nome: 'Hidrogênio', simbolo: 'H', numeroMassa: 1, pontoFusao: -259, pontoEbulicao: -253 },
    { nome: 'Carbono', simbolo: 'C', numeroMassa: 12, pontoFusao: 3550, pontoEbulicao: 4027 },
    { nome: 'Nitrogênio', simbolo: 'N', numeroMassa: 14, pontoFusao: -210, pontoEbulicao: -196 },
    { nome: 'Oxigênio', simbolo: 'O', numeroMassa: 16, pontoFusao: -218, pontoEbulicao: -183 },
    { nome: 'Sódio', simbolo: 'Na', numeroMassa: 23, pontoFusao: 98, pontoEbulicao: 883 },
    { nome: 'Cloro', simbolo: 'Cl', numeroMassa: 35, pontoFusao: -101, pontoEbulicao: -34 },
  ];

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
      this._estadoFisico.set(estado);
    });
  }

  setElemento(elemento: Elemento) {
    this._elementoSelecionado.set(elemento);
  }

  setTemperatura(temperatura: number) {
    this._temperatura.set(temperatura);
  }

  setFavorito(favorito: Elemento) {
    this._favoritos.update((arrayOriginal) => {
      const favoritos = [...arrayOriginal];
      favoritos.push(favorito);
      return favoritos;
    });
  }

  removerFavorito(favorito: Elemento) {
    this._favoritos.update((arrayOriginal) => {
      const favoritos = arrayOriginal.filter((fav) => fav !== favorito);
      return favoritos;
    });
  }
}
