import { computed, effect, Service, signal, untracked } from '@angular/core';
import type { Elemento } from '../interfaces/interfaces';

@Service()
export class ElementoService {
  private _elementoSelecionado = signal<Elemento | null>(null);
  readonly elementoSelecionado = this._elementoSelecionado.asReadonly();

  private _elementoCalculado1 = signal<Elemento | null>(null);
  readonly elementoCalculado1 = this._elementoCalculado1.asReadonly();

  private _elementoCalculado2 = signal<Elemento | null>(null);
  readonly elementoCalculado2 = this._elementoCalculado2.asReadonly();

  private _temperatura = signal<number>(25);
  readonly temperatura = this._temperatura.asReadonly();

  private _estadoFisico = signal<string>('(nenhum)');
  readonly estadoFisico = this._estadoFisico.asReadonly();

  private _favoritos = signal<Elemento[]>([]);
  readonly favoritos = this._favoritos.asReadonly();

  readonly elementos: Elemento[] = [
    {
      nome: 'Hidrogênio',
      simbolo: 'H',
      numeroAtomico: 1,
      numeroNeutrons: 0,
      numeroMassa: 1,
      pontoFusao: -259,
      pontoEbulicao: -253,
    },
    {
      nome: 'Carbono',
      simbolo: 'C',
      numeroAtomico: 6,
      numeroNeutrons: 6,
      numeroMassa: 12,
      pontoFusao: 3550,
      pontoEbulicao: 4027,
    },
    {
      nome: 'Nitrogênio',
      simbolo: 'N',
      numeroAtomico: 7,
      numeroNeutrons: 7,
      numeroMassa: 14,
      pontoFusao: -210,
      pontoEbulicao: -196,
    },
    {
      nome: 'Oxigênio',
      simbolo: 'O',
      numeroAtomico: 8,
      numeroNeutrons: 8,
      numeroMassa: 16,
      pontoFusao: -218,
      pontoEbulicao: -183,
    },
    {
      nome: 'Sódio',
      simbolo: 'Na',
      numeroAtomico: 11,
      numeroNeutrons: 12,
      numeroMassa: 23,
      pontoFusao: 98,
      pontoEbulicao: 883,
    },
    {
      nome: 'Cloro',
      simbolo: 'Cl',
      numeroAtomico: 17,
      numeroNeutrons: 18,
      numeroMassa: 35,
      pontoFusao: -101,
      pontoEbulicao: -34,
    },
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

  massaAtomicaTotal = computed(() => {
    const elemento1 = this._elementoCalculado1();
    const elemento2 = this._elementoCalculado2();

    const massa1 = untracked(() => (elemento1?.numeroAtomico ?? 0) + (elemento1?.numeroMassa ?? 0));
    const massa2 = untracked(() => (elemento2?.numeroAtomico ?? 0) + (elemento2?.numeroMassa ?? 0));

    return massa1 + massa2;
  });

  setElemento1(elemento: Elemento) {
    this._elementoCalculado1.set(elemento);
  }

  setElemento2(elemento: Elemento) {
    this._elementoCalculado2.set(elemento);
  }
}
